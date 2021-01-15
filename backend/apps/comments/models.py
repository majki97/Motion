from django.db import models
from apps.post.models import Post
from apps.users.models import User


# Create your models here.

class Comment(models.Model):
    text = models.CharField(max_length=300)
    created = models.DateField(auto_now_add=True)
    post = models.ForeignKey(to=Post, related_name='comments', on_delete=models.CASCADE)
    author = models.ForeignKey(to=User, related_name='comments', on_delete=models.CASCADE)

    def __str__(self):
        return f'Comment {self.text} by {self.author}'
