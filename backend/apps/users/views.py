from django.db.models import Q
from rest_framework.generics import UpdateAPIView, RetrieveAPIView, DestroyAPIView, ListAPIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response

from apps.users.models import User
from apps.users.serializer import UserSerializer


# Get All Users

class UsersListView(ListAPIView):
    """
        This text is the description for this API.

    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # def get_serializer_class(self):
    #     if self.request.method == 'GET':
    #         return UserSerializer


# Get single user
class GetSingleUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"


# Follow user
class FollowUser(UpdateAPIView):
    serializer_class = UserSerializer
    queryset = UserSerializer
    lookup_url_kwarg = 'user_id'

    def patch(self, request, *args, **kwargs):
        follow_user_id = self.kwargs.get("user_id")
        follow_user = User.objects.get(id=follow_user_id)
        if follow_user not in self.request.user.followers.all():
            follow_user.followees.add(self.request.user)
        return Response(f"{self.request.user.username} follows {follow_user.username}")


# Unfollow user
class UnfollowUser(DestroyAPIView):
    queryset = UserSerializer
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"

    def delete(self, request, *args, **kwargs):
        user_id = self.kwargs.get("user_id")
        user_delete = User.objects.get(id=user_id)
        self.request.user.followers.remove(user_delete)
        return Response("You have been unfollowed")


# List of the followers
class FollowersList(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        all_followers = self.request.user.followees.all()
        return all_followers


# List of people user is following
class UserIsFollowing(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        following = self.request.user.followers.all()
        return following


# Get specific user by providing parameters, need to be checked as it's working partially in postman but can't see it
# in swager

class UserSearch(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        #queryset = self.get_queryset()
        #current_user_posts = Post.objects.filter(user=current_user, created=datetime.today())
        first_name = kwargs.get('ref')
        #last_name = kwargs.get('ref')
        queryset = self.get_queryset().filter(first_name__icontains=first_name)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
