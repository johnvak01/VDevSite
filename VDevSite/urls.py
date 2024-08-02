"""
URL configuration for VDevSite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('polls/', include("polls.urls")),
    path("d1_counterapp/",include("d1_counterapp.urls")),
    path("d2_rannumgen/",include("d2_rannumgen.urls")),
    path("d3_hexcolorgen/",include("d3_hexcolorgen.urls")),
    path("d4_modal/",include("d4_modal.urls")),
    path('d5_palicheck/',include("d5_palicheck.urls")),
    path('d6_vowelcount/',include("d6_vowelcount.urls")),
    path('d7_clickcopy/', include("d7_clickcopy.urls")),
    path('d8_gddlink/', include("d8_gddlink.urls")),
    path('d9_charcount/',include("d9_charcount.urls")),
    path('d10_netstatus/',include("d10_netstatus.urls")),
    path('d11_quizapp/',include("d11_quizapp.urls")),
    path('d12_geolocate/',include("d12_geolocate.urls")),
    path('d13_httpprototype/',include("d13_httpprototype.urls")),
    path('d14_quotegen/',include("d14_quotegen.urls")),
    path('d15_weather/',include("d15_weather.urls")),
    
    ]

