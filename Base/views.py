
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import RegisterUserForm
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Profile, Student, Teacher, Owner, Review

from django.core.files.storage import FileSystemStorage

# notes 
# pip install -r requirements.txt       to download all required packages


def loginPage(request):

    context = {}
    
    if request.user.is_authenticated:
        return redirect('home')
    if request.method == "POST":
        username = request.POST.get('username').lower()
        password = request.POST.get('password').lower()

        try:
            user = User.objects.get(username=username)
            if user.password != password:
                context['messages'] = "Password not matched"
        except:
            context['messages'] = "User does not exists"
            # messages.error(request, 'User does not exists')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Username or passward does not exists')
   
    return render(request, 'login.html', context)



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

# @login_required(login_url='login')
def home(request):
    context = {}

    if request.user.is_authenticated:

        dp = request.user.profile.dp
        context['dp'] = dp

        if request.user.profile.role == 'student': 
            student = Student.objects.get(student_userid  = request.user.id)
            context["student"] = student

        elif request.user.profile.role == 'teacher': 
            teacher = Teacher.objects.get(teacher_userid  = request.user.id)
            context["teacher"] = teacher

        if request.user.profile.role == 'owner': 
            owner = Owner.objects.get(mess_userid  = request.user.id)
            context["owner"] = owner
    
    reviews = Review.objects.all()
    context["reviews"] = reviews
    
    
    return render(request, 'home.html', context )




def profileDetails(request):
    uId = request.user.id
    user = User.objects.get(id = uId)
    profile = Profile.objects.get(user = user)
    context = {}

    # print(profile.user)

    # profile data taking input
    
    if request.method == "POST" and request.FILES['dp']:
        fullname = request.POST['full-name']
        email =  request.POST['email'].lower()
        role = request.POST['role'].lower()
        phNo = request.POST['phNo']
        socialId = request.POST['socialId']
        desc = request.POST['desc']
        dp = request.FILES['dp']
        
        fs = FileSystemStorage()
        dp =fs.save(dp.name,dp)
    

        # print(fullname,email,role)

        profile.fullName = fullname
        profile.email = email
        profile.role = role
        profile.phNo = phNo
        profile.socialId = socialId
        profile.desc = desc
        profile.dp = dp
       

        profile.save()

        if role == "teacher":
            Teacher.objects.create(teacher_userid = uId)
        elif role == "student":
            Student.objects.create(student_userid = uId)
        elif role == "owner":
            Owner.objects.create(mess_userid = uId)


        return redirect("role-details")
    
    return render(request, 'user_data.html', context)


def roleDetails(request):
    uId = request.user.id
    user = User.objects.get(id = uId)
    profile = Profile.objects.get(user = user)

    page = 'student'

    if profile.role == 'student':
        page = 'student'

        if request.method == "POST":
            institute = request.POST['institute']
            subject = request.POST['subject']
            interest = request.POST['interest']
            courseDuration = request.POST['courseDuration']
            
            student = Student.objects.get(student_userid = uId)

            student.institute = institute
            student.subject = subject
            student.interest = interest
            student.courseDuration = courseDuration

            student.save()
            return redirect('home')


    if profile.role == 'teacher':
        page = 'teacher'

        if request.method == "POST":
            location = request.POST['location']
            dptOfTeaching = request.POST['dptOfTeaching']
            qualification = request.POST['qualification']
            
            teacher = Teacher.objects.get(teacher_userid = uId)

            teacher.location = location
            teacher.dptOfTeaching = dptOfTeaching
            teacher.qualification = qualification

            teacher.save()
            return redirect('home')

    if profile.role == 'owner':
        page = 'owner'
        if request.method == "POST":
            mess_name = request.POST['mess_name']
            rent = request.POST['rent']
            bedAvailable = request.POST['bedAvailable']
            address = request.POST['address']
            
            owner = Owner.objects.get(mess_userid = uId)

            owner.mess_name = mess_name
            owner.rent = rent
            owner.bedAvailable = bedAvailable
            owner.address = address

            owner.save()

            return redirect('home')
        
    context ={'page':page}
    
    return render(request, 'role-details.html', context)



        

        





    




