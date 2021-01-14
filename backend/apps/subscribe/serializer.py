from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer



class SubscribeSerializer(serializers.Serializer):
    # class Meta:
    #    model = User
    #    fields = ['id', 'username', 'email']
    email = serializers.EmailField()

