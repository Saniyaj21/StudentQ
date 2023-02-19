
from email.policy import default
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, null=True,blank = True, on_delete=models.CASCADE)
    fullName = models.CharField(max_length = 200, null=True)
    email = models.EmailField(max_length =100, null=True)
    
    # TEACHER = 'teacher'
    # STUDENT = 'student'
    # OWNER = 'owner'
    # ROLE_CHOICES = [
    #     (TEACHER, 'Teacher'),
    #     (STUDENT, 'Student'),
    #     (OWNER, 'Owner'),
    # ]
    # role = models.CharField(
    #     max_length=10,
    #     choices=ROLE_CHOICES,
    #     default=STUDENT,
    # )

    # role will be a chice on frontend all in lower case ex - teacher student owner
    role = models.CharField(max_length= 50)
    
    
    def __str__(self):
        return self.user.username 

        

class Student(models.Model):
    
    student_userid  = models.CharField(max_length=200)
    institute = models.CharField(max_length=200, null=True)
    
    

class Teacher(models.Model):

    teacher_userid  = models.CharField(max_length=200)
    location = models.CharField(max_length=200, null=True)
    
    

class Owner(models.Model):

    mess_userid  = models.CharField(max_length=200)
    mess_name = models.CharField(max_length=200, null=True)
    
     

    



