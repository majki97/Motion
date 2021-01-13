from django.urls import path
from apps.users.views import UsersListView, FollowUser, GetSingleUser, UnfollowUser, FollowersList, UserIsFollowing,\
    UserSearch, MeView

urlpatterns = [
    path('', UsersListView.as_view(), name="users_list"),
    path('<int:user_id>/', GetSingleUser.as_view(), name="specific_user"),
    path('follow/<int:user_id>/', FollowUser.as_view(), name="follow_user"),
    path('unfollow/<int:user_id>/', UnfollowUser.as_view(), name="unfollow_user"),
    path('followers/', FollowersList.as_view(), name="followers"),
    path('following/', UserIsFollowing.as_view(), name="following"),
    path('me/', MeView.as_view(), name="user_profile"),
    path('search/<str:ref>/', UserSearch.as_view(), name='search_user'),
]


