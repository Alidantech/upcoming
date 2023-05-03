from django.http import HttpResponse
from django.template import loader

def account(request):
  template = loader.get_template('register.html')
  return HttpResponse(template.render())

def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())

def about(request):
  template = loader.get_template('about.html')
  return HttpResponse(template.render())