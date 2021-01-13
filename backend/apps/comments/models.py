from django.db import models
from apps.post import Post

# Create your models here.

class Comment(models.Model):
    text = models.CharField(max_length=300)
    author = models.CharField(max_length=80)
    created = models.DateField(auto_now_add=True)
    approved_comment = models.BooleanField(default=False)
    post = models.ForeignKey(to=Post, related_name='comments', on_delete=models.SET_NULL)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return f'Comment {self.text} by {self.author}'