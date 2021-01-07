from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.auth.models import AbstractUser


# UserModel = get_user_model()

class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    phone_number = models.IntegerField(blank=True, null=True)
    location = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True)
    followers = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='followees')

    # likes = models.ManyToManyField(to=Post, related_name='users')
    # registration_profile = models.OneToOneField(to=Registration_profile, related_name='users', on_delete=models.CASCADE)

    def __str__(self):
        return self.username
