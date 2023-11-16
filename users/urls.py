from django.urls import path
from . import views
from .views import register
from .views import login_view


urlpatterns = [
    path("", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("support/", views.support, name="support"),
    path("apidocs/", views.apidocs, name="apidocs"),
    path("developers/", views.developers, name="developers"),
    path("account/", views.account, name="account"),
    path("accounts/login/", login_view, name="login"),
    path("register/", register, name="register"),
    path("faqs/", views.faqs, name="faqs"),
]
