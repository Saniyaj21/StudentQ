
from email.policy import default
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, null=True,blank = True, on_delete=models.CASCADE)
    fullName = models.CharField(max_length = 200, null=True)
    email = models.EmailField(max_length =100, null=True)
    role = models.CharField(max_length= 50)
    # role will be a chice on frontend all in lower case ex - teacher student owner
    phNo = models.CharField(max_length=20, null=True)
    socialId = models.CharField(max_length=200, null=True)
    desc =models.TextField(null = True)
    dp = models.ImageField(null = True, blank = True, default='bydefault.jpg', upload_to="media")

    # dp
    
  
    def __str__(self):
        return self.user.username 

        

class Student(models.Model):
    
    student_userid  = models.CharField(max_length=200)
    institute = models.CharField(max_length=200, null=True)
    subject = models.CharField(max_length=200, null=True)
  
    interest = models.CharField(max_length=200, null=True)
    courseDuration = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.student_userid
    
    
    

class Teacher(models.Model):

    teacher_userid  = models.CharField(max_length=200)
    location = models.CharField(max_length=200, null=True)
    dptOfTeaching = models.CharField(max_length=200, null=True)
    qualification = models.CharField(max_length=200, null=True)
    
    def __str__(self):
        return self.teacher_userid

    
    

    # teacher review
    
    

class Owner(models.Model):

    mess_userid  = models.CharField(max_length=200)
    mess_name = models.CharField(max_length=200, null=True)
    rent =models.CharField(max_length = 10, null = True)
    
    bedAvailable =models.CharField(max_length = 10, null = True)
    address =models.CharField(max_length = 300, null = True)

    # roomPic(2)

    def __str__(self):
        return self.mess_name

    # class mess_review
    

# website Review
class Review(models.Model):
    # poster = user.profile.fullname
    poster = models.CharField(max_length=100) 
    review = models.CharField(max_length=500) 

    def __str__(self):
        return self.poster
     

    



