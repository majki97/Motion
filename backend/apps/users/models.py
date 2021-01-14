from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


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

    def __str__(self):
        return self.username
