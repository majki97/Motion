from django.urls import path
from apps.comments.views import CreateGetCommentView

urlpatterns = [
    path('<int:post_id>/', CreateGetCommentView.as_view(), name="comments_list"),
]