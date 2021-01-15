from rest_framework import serializers


class SubscribeSerializer(serializers.Serializer):
    # class Meta:
    email = serializers.EmailField()
