from . import views
from django.urls import path

urlpatterns = [
    path("", views.index, name="d20_smoothscroll")
        ]
