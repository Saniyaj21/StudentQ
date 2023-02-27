from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),


    path('login/', views.loginPage, name='login'),
    path('logout/', views.logoutUser, name='logout'),
    path('register/', views.registerUser, name='register'),

    path('profile-details/', views.profileDetails, name='profile-details'),
    path('role-details/', views.roleDetails, name='role-details'),
]

# owner -
# 1. home/ view-dashboard  (home )

# teacher
# 1. teacher-dashboard/  
# 2. student-kind view

# student
# 1. home (blog/source/video/) 

