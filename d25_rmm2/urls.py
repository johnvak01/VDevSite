from . import views
from django.urls import path

urlpatterns = [
    path("",views.index,name="d25_rmm2")
        ]
