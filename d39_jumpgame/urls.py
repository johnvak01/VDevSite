from . import views
from django.urls import path

urlpatterns=[
    path("",views.index,name="d39_jumpgame")
        ]
