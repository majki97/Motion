from django.db import models


class Subscribe:
    EMAIL_FIELD = 'email'
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.EMAIL_FIELD
