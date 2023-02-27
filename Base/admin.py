
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Profile, Teacher, Student, Owner,Review

admin.site.register(Profile)

admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Owner)
admin.site.register(Review)
