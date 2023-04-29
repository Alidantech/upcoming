from django.http import HttpResponse
from django.template import loader

def latest(request):
    template = loader.get_template('latest.html')
    return HttpResponse(template.render())