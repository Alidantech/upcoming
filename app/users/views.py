from django.http import HttpResponse
from django.template import loader

def users(request):
  template = loader.get_template('register.html')
  return HttpResponse(template.render())

def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())