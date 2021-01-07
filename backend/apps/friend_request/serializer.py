from rest_framework import serializers

from apps.friend_request.models import FriendRequest


class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = '__all__'
