from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
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
            return redirect('music')  # Redirect to the music page URL
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

from django.shortcuts import redirect

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                next_url = request.POST.get('next') or 'music'  # Default to 'music' if 'next' is not provided
                return redirect(next_url)
            else:
                form.add_error(None, 'Invalid username or password')
    else:
        form = LoginForm()
    
    # Retrieve 'next' parameter from the URL if present
    next_url = request.GET.get('next', 'music')  # Default to 'music' if 'next' is not present in the URL
    
    return render(request, 'registration/login.html', {'form': form, 'next': next_url})

@login_required
def account(request):
    template = 'account.html'
    return render(request, template)

def main(request):
    template = 'main.html'
    return render(request, template)

def about(request):
    template = 'about.html'
    return render(request, template)

def artists(request):
    template = 'artists.html'
    return render(request, template)
