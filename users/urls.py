from django.urls import path
from . import views
from .views import register
from .views import login_view


urlpatterns = [
    path('', views.main, name='main'),
    path('account/', views.account, name='account'),
    path('about/', views.about, name='about'),
    path('register/', register, name='register'),
    path('accounts/login/', login_view, name='login'),
    path('developers/', views.developers, name='developers'),
    path('support/', views.support, name='support'),
]