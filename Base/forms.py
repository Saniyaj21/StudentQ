from dataclasses import fields
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .models import Notice


from django import forms




class RegisterUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','password1','password2']        

        widgets ={
            'username':forms.TextInput(attrs={'id':'form-input1'}),
            'password1':forms.TextInput(attrs={'id':'id_password1'}),
            'password2':forms.TextInput(attrs={'id':'id_password2'}),
        }


    
# class NoticeForm(forms.ModelForm):
#     class Meta:
#         model = Notice
#         fields = '__all__'
#         exclude = ['institute' ]
#         labels={
#             'notice':'Upload Notice',
#             'institute':'Chose institute',
#         }

        # widgets={
        #     'name': forms.TextInput(attrs={'class':'form-control'}),
        #     'password': forms.TextInput(attrs={'class':'form-control'}),
        # }

