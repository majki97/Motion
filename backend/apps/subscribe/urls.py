from django.urls import path
from apps.subscribe.views import SubscribeListView, RegistrationValidation

urlpatterns = [
    path('', SubscribeListView.as_view(), name='subscribe'),
    path('validation/', RegistrationValidation.as_view(), name='validation')
]

