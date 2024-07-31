from django.urls import path
from . import views

urlpatterns = [
    path("", views.index,name="d13_httpprototype"),
    path("GetJSON/", views.getJSONFile,name="getJSON"),
        ]
