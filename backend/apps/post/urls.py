from django.urls import path

from apps.post.views import PostListView, RetrieveUpdateDestroyPostView, TogglePost, LikedPost, FollowedPostList, \
    UserListPostOrder

urlpatterns = [
    path('', PostListView.as_view(), name="users_list"),
    path('<int:pk>/', RetrieveUpdateDestroyPostView.as_view()),
    path('toggle-like/<int:post_id>/', TogglePost.as_view()),
    path('likes/', LikedPost.as_view()),
    path('following/', FollowedPostList.as_view()),
    path('user/<int:user_id>/', UserListPostOrder.as_view())
]
