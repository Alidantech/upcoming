from django.urls import path
from . import views

urlpatterns = [
    path('music/', views.music, name='music'),
    path('record/', views.record, name='record'),
]