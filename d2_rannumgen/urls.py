
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="d2_rannumgen"),

        ]

