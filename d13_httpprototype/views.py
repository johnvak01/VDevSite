from django.shortcuts import render
from django.http import HttpResponse
import os
from django.conf import settings
# Create your views here.

def index(request):
    return render(request, "d13_httpprototype/index.html")

def getJSONFile(request):
    file = open(os.path.join(settings.BASE_DIR, 'd13_httpprototype/static/d13_httpprototype/users.json'),'r')
    return HttpResponse(file)



