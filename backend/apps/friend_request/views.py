from django.core.mail import send_mail
from project.settings import EMAIL_HOST_USER
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from apps.friend_request.models import FriendRequest
from apps.friend_request.serializer import FriendSerializer
from apps.users.permissions import IsUser

User = get_user_model()

# get all friends
class GetAllFriends(ListCreateAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendSerializer
    permission_classes = [IsUser]

# send friend request
class SendFriendRequest(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'user_id'
    #permission_classes = [IsUser]

    def post(self, request, *args, **kwargs):
        user = request.user
        receiver = self.get_object()
        friend_request = FriendRequest(sender=user, receiver=receiver)
        friend_request.save()
        subject = 'Friend request'
        message = 'You have a new friend request!'
        recipient = receiver.email
        send_mail(subject, message, EMAIL_HOST_USER, [recipient], fail_silently=False)
        return Response(self.get_serializer(friend_request).data)


class ApproveOrNotFriendRequest(RetrieveUpdateDestroyAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'friend_request_id'
    permission_classes = [IsUser]



