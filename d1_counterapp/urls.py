from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="d1_counterapp"),

        ]

