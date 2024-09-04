from . import views
from django.urls import path

urlpatterns=[
    path("",views.index,name="d45_wikisearch")
        ]
