from rest_framework.generics import ListCreateAPIView
from apps.users.permissions import IsUser
from apps.comments.serializers import CommentSerializer
from apps.comments.models import Comment


class CreateGetCommentView(ListCreateAPIView):
    """
    Create comment on a post and list all comments on specific post
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_field = 'post_id'
    permission_classes = [IsUser]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, post_id=self.kwargs['post_id'])
