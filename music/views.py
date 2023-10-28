from django.http import HttpResponse
from django.template import loader


def music(request):
    template = loader.get_template('music.html')
    return HttpResponse(template.render())

def record(request):
    template = loader.get_template('record.html')
    return HttpResponse(template.render())

def player(request):
    template = loader.get_template('player.html')
    return HttpResponse(template.render())

def beats(request):
    template = loader.get_template('beats.html')
    return HttpResponse(template.render())