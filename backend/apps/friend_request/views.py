from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from apps.friend_request.models import FriendRequest
from apps.friend_request.serializer import FriendSerializer

User = get_user_model()

# get all friends
class GetAllFriends(ListCreateAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendSerializer

# send friend request
class SendFriendRequest(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'user_id'

    def post(self, request, *args, **kwargs):
        user = request.user
        receiver = self.get_object()
        friend_request = FriendRequest(sender=user, receiver=receiver)
        friend_request.save()
        return Response(self.get_serializer(friend_request).data)


# need to be check with TA, error 500
class ApproveOrNotFriendRequest(RetrieveUpdateDestroyAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'friend_request_id'


