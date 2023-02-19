from django.shortcuts import render

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import RegisterUserForm
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Profile, Student, Teacher, Owner



def loginPage(request):
    
    if request.user.is_authenticated:
        return redirect('home')
    if request.method == "POST":
        username = request.POST.get('username').lower()
        password = request.POST.get('password').lower()

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exists')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Username or passward does not exists')

   
    return render(request, 'login.html')



def logoutUser(request):
    logout(request)
    return redirect('home')



def registerUser(request):
    
    form = RegisterUserForm()
  


    if request.method == "POST":
        form = RegisterUserForm(request.POST)
        # form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            profile = Profile.objects.create(user=user)
            return redirect('profile-details')
            
        
            
        else:
            messages.error(request, 'Something error happend,Try again!')

    return render(request, 'register.html', {'form': form})


def home(request):
    msg = "Message from backend"

    users = User.objects.all()
    profiles = Profile.objects.all()
    students = Student.objects.all()
    teachers = Teacher.objects.all()
    messes = Owner.objects.all()

    

    


    context = {'msg': msg, 'users':users,'profiles':profiles, 'teachers':teachers, 'students':students, 'messes':messes}
    return render(request, 'home.html', context )


def profileDetails(request):
    uId = request.user.id
    user = User.objects.get(id = uId)
    profile = Profile.objects.get(user = user)

    # print(profile.user)

    if request.method == "POST":
        fullname = request.POST['full-name']
        email =  request.POST['email'].lower()
        role = request.POST['role'].lower()

        # print(fullname,email,role)

        profile.fullName = fullname
        profile.email = email
        profile.role = role

        profile.save()

        if role == "teacher":
            Teacher.objects.create(teacher_userid = uId)
        elif role == "student":
            Student.objects.create(student_userid = uId)
        elif role == "owner":
            Owner.objects.create(mess_userid = uId)


        return redirect("role-details")
    
    return render(request, 'user_data.html')


def roleDetails(request):
    uId = request.user.id
    user = User.objects.get(id = uId)
    profile = Profile.objects.get(user = user)

    page = 'student'

    if profile.role == 'student':
        page = 'student'

        if request.method == "POST":
            institute = request.POST['institute']
            
            student = Student.objects.get(student_userid = uId)

            student.institute = institute
            student.save()
            return redirect('home')


    if profile.role == 'teacher':
        page = 'teacher'

        if request.method == "POST":
            location = request.POST['location']
            
            teacher = Teacher.objects.get(teacher_userid = uId)

            teacher.location = location
            teacher.save()
            return redirect('home')

    if profile.role == 'owner':
        page = 'owner'
        if request.method == "POST":
            mess_name = request.POST['mess_name']
            
            owner = Owner.objects.get(mess_userid = uId)

            owner.mess_name = mess_name
            owner.save()

            return redirect('home')
        



    context ={'page':page}



    
    return render(request, 'role-details.html', context)



        

        





    




