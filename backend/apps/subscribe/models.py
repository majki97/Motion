from django.db import models


# UserModel = get_user_model()

class Subscribe:
    EMAIL_FIELD = 'email'
    #REQUIRED_FIELDS = ['email']
    email = models.EmailField(unique=True)


    def __str__(self):
        return self.EMAIL_FIELD
