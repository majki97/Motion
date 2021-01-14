from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    text = models.CharField(max_length=200)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='posts', on_delete=models.SET_NULL, null=True)
    liked_by = models.ManyToManyField(to=User, verbose_name='liked by', related_name='liked_post', blank=True)

    def __str__(self):
        return f'Post {self.pk} by {self.user}'
