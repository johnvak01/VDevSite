from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="d4_modal")
        ]
