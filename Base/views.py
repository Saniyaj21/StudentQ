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
    page = 'login'
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
            messages.error(request, 'Username or passward does not exxists')

    context = {'page': page}
    return render(request, 'login.html', context)



def logoutUser(request):
    logout(request)
    return redirect('home')



def registerUser(request):
    page = 'register'
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
            return redirect('home')
            
        
            
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




