from django.conf import settings
from django.db import models


class FriendRequest(models.Model):
    STATUS_CHOICES = [
        (1, 'Pending'),
        (2, 'Accepted'),
        (3, 'Rejected')
    ]
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    sender = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='request_sent')
    receiver = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='request_received')

    def __str__(self):
        return f'Your friend request has been sent to {self.receiver}. Status: {self.status}'
