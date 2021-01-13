from rest_framework.response import Response
from apps.post.permissions import IsUser, IsUserOrReadOnly
from apps.post.models import Post
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListAPIView

from apps.post.serializers import PostSerializer


class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsUserOrReadOnly]


class RetrieveUpdateDestroyPostView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsUser]


# Like unlike post
class TogglePost(GenericAPIView):
    queryset = Post
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    permission_classes = [IsUser]

    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        user = self.request.user
        user_liked_post = user in post.liked_by.all()
        if user_liked_post:
            post.liked_by.remove(user)
        else:
            post.liked_by.add(user)
        return Response(self.get_serializer(post).data)


# List of post user likes
class LikedPost(ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsUser]

    def get_queryset(self):
        user_id = self.request.user.id
        posts = Post.objects.filter(liked_by=user_id)
        return posts


# List of post from user that current user is following
class FollowedPostList(ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsUserOrReadOnly]

    def get_queryset(self):
        follow_user_id = self.request.user.followers.all().values_list('id', flat=True)
        posts = Post.objects.filter(user_id__in=follow_user_id)
        return posts


# List of post of selected user in chronological order
class UserListPostOrder(ListAPIView):
    serializer_class = PostSerializer
    lookup_url_kwarg = 'user_id'
    permission_classes = [IsUserOrReadOnly]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Post.objects.filter(user_id=user_id).order_by('-created')
