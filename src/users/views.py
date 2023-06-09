from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from .forms import LoginForm

from .forms import CustomUserCreationForm

# User authentication views
def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                form.add_error(None, 'Invalid username or password')
    else:
        form = LoginForm()
    return render(request, 'registration/login.html', {'form': form})

def account(request):
    template = 'account.html'
    return render(request, template)

# Other pages views
def main(request):
    template = 'main.html'
    return render(request, template)

def about(request):
    template = 'about.html'
    return render(request, template)

def artists(request):
    template = 'artists.html'
    return render(request, template)
