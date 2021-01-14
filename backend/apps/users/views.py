from project.settings import EMAIL_HOST_USER
from django.core.mail import send_mail
from rest_framework.generics import UpdateAPIView, RetrieveAPIView, DestroyAPIView, ListAPIView, \
    RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from apps.users.permissions import IsUser
from apps.users.models import User
from apps.users.serializer import UserSerializer, MeSerializer


# Get All Users

class UsersListView(ListAPIView):
    """
        This text is the description for this API.

    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsUser]


# Get single user
class GetSingleUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"
    permission_classes = [IsUser]


# Follow user
class FollowUser(UpdateAPIView):
    serializer_class = UserSerializer
    queryset = UserSerializer
    lookup_url_kwarg = 'user_id'
    permission_classes = [IsUser]

    def patch(self, request, *args, **kwargs):
        follow_user_id = self.kwargs.get("user_id")
        follow_user = User.objects.get(id=follow_user_id)
        if follow_user not in self.request.user.followers.all():
            follow_user.followees.add(self.request.user)
        subject = 'You have a follower'
        message = 'You have a new follower'
        recipient = follow_user.email
        send_mail(subject, message, EMAIL_HOST_USER, [recipient], fail_silently=False)
        return Response(f"{self.request.user.username} follows {follow_user.username}")


# Unfollow user
class UnfollowUser(DestroyAPIView):
    queryset = UserSerializer
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"
    permission_classes = [IsUser]

    def delete(self, request, *args, **kwargs):
        user_id = self.kwargs.get("user_id")
        user_delete = User.objects.get(id=user_id)
        self.request.user.followers.remove(user_delete)
        return Response("You have been unfollowed")


# List of the followers
class FollowersList(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsUser]

    def get_queryset(self):
        all_followers = self.request.user.followees.all()
        return all_followers


# List of people user is following
class UserIsFollowing(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsUser]

    def get_queryset(self):
        following = self.request.user.followers.all()
        return following


# Get specific user by providing parameters

class UserSearch(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsUser]

    def get(self, request, *args, **kwargs):
        first_name = kwargs.get('ref')
        queryset = self.get_queryset().filter(first_name__icontains=first_name)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class MeView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = MeSerializer

    def get_object(self):
        return self.request.user
