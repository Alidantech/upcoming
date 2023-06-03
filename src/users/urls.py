from django.urls import path
from . import views
from .views import register


urlpatterns = [
    path('', views.main, name='main'),
    path('account/', views.account, name='account'),
    path('about/', views.about, name='about'),
    path('artists/', views.artists, name = 'artists'),
    path('register/', register, name='register'),
]