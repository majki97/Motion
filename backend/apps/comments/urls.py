from django.urls import path

from apps.comments.views import CommentsListView, CreateCommentView

urlpatterns = [
    path('<int:pk>/', CommentsListView.as_view(), name="comments_list"),
    path('<int:pk>/', CreateCommentView.as_view() name="add_comment_to_post"),
]