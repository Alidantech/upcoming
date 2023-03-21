from django.shortcuts import render
from django.shortcuts import render
from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import reverse

# Create your views here.
def registration_page_view(request):
 
  return render(request, "upcoming/homepage.html")

def register():
   pass

















