from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),

    # authentication paths
    path('login/', views.loginPage, name='login'),
    path('logout/', views.logoutUser, name='logout'),
    path('register/', views.registerUser, name='register'),

    # user information based on their Account type
    path('profile-details/', views.profileDetails, name='profile-details'),
    path('role-details/', views.roleDetails, name='role-details'),

    # profile section
    path('profile/<str:id>/', views.profile, name='profile'),

    # study metirial 
    path('study-metirial/',views.studyMetirial, name='studyMetirial'),
    path('post/',views.postPage, name='post'),

    # institute  section
    path('institute/',views.Institutes, name='institute'),

    # notices
    path('notices/<str:id>/',views.Notices, name='notices'),   
    path('upload-notice/<str:id>/', views.PostNotice, name='postNotice'),
    path('delete/<str:id>/', views.delete_notice ,name="delete"),

  
]




