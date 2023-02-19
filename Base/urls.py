from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    
    # path('register/', views.register, name='register'),
    # path('login/', views.login, name='login'),

    path('login/', views.loginPage, name='login'),
    path('logout/', views.logoutUser, name='logout'),
    path('register/', views.registerUser, name='register'),

    path('profile-details/', views.profileDetails, name='profile-details'),
    path('role-details/', views.roleDetails, name='role-details')
]
