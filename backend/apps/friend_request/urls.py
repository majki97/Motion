from django.urls import path

from apps.friend_request.views import GetAllFriends, SendFriendRequest, ApproveOrNotFriendRequest

urlpatterns = [
    path('', GetAllFriends.as_view(), name='friends_list'),
    path('request/<int:user_id>/', SendFriendRequest.as_view(), name='send_friend_request'),
    path('requests/<int:friend_request_id>/', ApproveOrNotFriendRequest.as_view(), name='friend_response')
]
