
from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name="d10_netstatus")
        ]
