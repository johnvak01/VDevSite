from django.urls import path
from  . import views

urlpatterns = [
    path("",views.index,name="d6_vowelcount")
        ]
