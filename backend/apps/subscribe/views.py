# from django.shortcuts import render
# from project.settings import EMAIL_HOST_USER
# from . import forms
# from django.core.mail import send_mail
# from random import random
# import random
#
#
#
# def subscribe(request):
#     sub = forms.Subscribe(request.POST)
#     length = 5
#     numbers = '0123456789'
#     validation_code = ''.join(random.choice(numbers) for _ in range(length))
#     if request.method == 'POST':
#         sub = forms.Subscribe(request.POST)
#         subject = 'Welcome to Motion'
#         message = 'Here is your validation code ' + validation_code
#         recipient = str(sub['Email'].value())
#         send_mail(subject, message, EMAIL_HOST_USER, [recipient], fail_silently=False)
#         return render(request, 'subscribe/success.html', {'recipient': recipient})
#
#     return render(request, 'subscribe/index.html', {'form': sub})
from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, GenericAPIView

from apps.registration_profile.models import RegistrationProfile
from apps.subscribe.models import Subscribe
from apps.subscribe.serializer import SubscribeSerializer
from apps.users.models import User
from apps.users.serializer import UserSerializer

from project.settings import EMAIL_HOST_USER

from django.core.mail import send_mail

import random


class SubscribeListView(CreateAPIView):
    serializer_class = SubscribeSerializer
    permission_classes = []


    def post(self, request, *args, **kwargs):

        email_data = self.request.data
        email_address = email_data.__getitem__("email")
        length = 5
        numbers = '0123456789'
        validation_code = ''.join(random.choice(numbers) for _ in range(length))
        subject = 'Welcome to Motion'
        message = 'Here is your validation code ' + validation_code
        recipient = email_address
        send_mail(subject, message, EMAIL_HOST_USER, [recipient], fail_silently=False)

        try:
            new_user = User(email=email_address, username=email_address, is_active=False)
            new_user.save()
            registration_profile = RegistrationProfile(user=new_user, code=validation_code)
            registration_profile.save()
            return Response(status=status.HTTP_200_OK)
        except IntegrityError:
            return Response(data="This email is already taken.", status=400)



class RegistrationValidation(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


    def post(self, request, *args, **kwargs):
        email = self.request.data["email"]
        code = self.request.data["code"]
        try:
            registration = RegistrationProfile.objects.get(user__email=email, code=code, code_used=False)
            registration.user.username = self.request.data["username"]
            registration.user.first_name = self.request.data["first_name"]
            registration.user.last_name = self.request.data["last_name"]
            registration.user.set_password(self.request.data["password"])
            registration.user.is_active = True
            registration.code_used = True
            registration.user.save()
            registration.save()
            return Response(self.get_serializer(registration.user).data)
        except ObjectDoesNotExist:
            return Response(data=f"This email {email} and code {code} do not match.", status=400)
        except IntegrityError:
            return Response(data="This username is already taken.", status=400)