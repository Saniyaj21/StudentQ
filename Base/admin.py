
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Profile, Teacher, Student, Owner

admin.site.register(Profile)

admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Owner)
