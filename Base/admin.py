
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Profile, Teacher, Student, Owner,Review, Tutorial, Institute, Notice

admin.site.register(Profile)

admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Owner)
admin.site.register(Review)
admin.site.register(Tutorial)
admin.site.register(Institute)
admin.site.register(Notice)

