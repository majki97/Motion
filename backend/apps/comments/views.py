from rest_framework.generics import ListCreateAPIView
from apps.users.permissions import IsUser, IsUserOrReadOnly
from apps.comments.serializers import CommentSerializer
from apps.comments.models import Comment


#create and get comments for a specific post

class CreateGetCommentView(ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_field = 'post_id'
    permission_classes = [IsUser]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, post_id=self.kwargs['post_id'])
