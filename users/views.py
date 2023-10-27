from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .forms import LoginForm
from .forms import CustomUserCreationForm

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

    context = {
        'form': form,
        'next': next_url,
        'active_page': 'login'  # Set the active page as 'login'
    }
    return render(request, 'registration/login.html', context)

@login_required
def account(request):
    context = {
        'active_page': 'account'  # Set the active page as 'account'
    }
    template = 'account.html'
    return render(request, template, context)

def main(request):
    context = {
        'active_page': 'main'  # Set the active page as 'main'
    }
    template = 'main.html'
    return render(request, template, context)

def about(request):
    context = {
        'active_page': 'about'  # Set the active page as 'about'
    }
    template = 'about.html'
    return render(request, template, context)

def artists(request):
    context = {
        'active_page': 'artists'  # Set the active page as 'artists'
    }
    template = 'artists.html'
    return render(request, template, context)

def developers(request):
    context = {
        'active_page': 'developers'  # Set the active page as 'artists'
    }
    template = 'developers/developers.html'
    return render(request, template, context)

def support(request):
    context = {
        'active_page': 'support'  # Set the active page as 'artists'
    }
    template = 'community/support.html'
    return render(request, template, context)
