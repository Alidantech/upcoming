from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('account/', views.account, name='account'),
    path('about/', views.about, name='about'),
]