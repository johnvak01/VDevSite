from . import views
from django.urls import path

urlpatterns=[
    path("", views.index,name="d38_tempconverter")
        ]
