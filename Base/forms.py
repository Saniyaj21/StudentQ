from dataclasses import fields
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


from django import forms




class RegisterUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','password1','password2']        

        widgets ={

            'username':forms.TextInput(attrs={'id':'form-input1'}),
            'password1':forms.TextInput(attrs={'id':'id_password1'  }),

            'password2':forms.TextInput(attrs={'id':'id_password2' }),
        }

