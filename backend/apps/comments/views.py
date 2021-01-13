from django.shortcuts import get_object_or_404, render, redirect
from rest_framework.generics import ListAPIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from apps.users.permissions import IsUser, IsUserOrReadOnly
from apps.comments.serializer import CommentSerializer
from apps.comments.urls import CommentsListView, CreateCommentView
from apps.comments.models import Comment
from apps.post.models import Post

#list/show all comments
class CommentsListView(ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsUserOrReadOnly]

    def get_queryset(self):
        all_comments = self.request.comments.all()
        return all_comments

#create comments for a post
class CreateCommentView(ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsUser]

    def get_queryset(self, request, pk, *args, **kwargs):
        post = get_object_or_404(Post, pk=pk)
        if request.method == "POST":
            serializer = CommentSerializer(data=request.POST)
            if serializer.is_valid():
                comment = serializer.save(commit=False)
                comment.post = post
                comment.save()
                return redirect('post_detail', pk=post.pk)
        else:
            return render(request)




