from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.shortcuts import render, redirect

from django.http import HttpResponse
from django.template import loader

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Replace 'home' with the URL name for your home page
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

def account(request):
  template = loader.get_template('register.html')
  return HttpResponse(template.render())

def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())

def about(request):
  template = loader.get_template('about.html')
  return HttpResponse(template.render())

def artists(request):
  template = loader.get_template('artists.html')
  return HttpResponse(template.render())