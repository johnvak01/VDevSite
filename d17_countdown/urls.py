from django.urls import path
from . import views
urlpatterns = [
    path("",views.index,name="d17_countdown")
        ]
