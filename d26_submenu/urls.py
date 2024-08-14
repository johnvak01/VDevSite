from django.urls import path
from . import views

urlpatterns=[
    path("",views.index,name="d26_submenu")
        ]
