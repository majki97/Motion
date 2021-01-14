from abc import ABC
from rest_framework import serializers


class SubscribeSerializer(serializers.Serializer, ABC):
    email = serializers.EmailField()
