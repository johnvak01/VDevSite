from . import views
from django.urls import path

urlpatterns = [
    path("",views.index,name="d31_localstorage")
        ]
