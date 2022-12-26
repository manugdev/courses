"""proyecto1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
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
from django.urls import path
from aplicacion1 import views
from django.conf.urls import include

urlpatterns = [
    path("",views.vista6,name="vista6"),
    path("paginas/", include("aplicacion1.urls")),
    path("formulario/",views.vista7,name="vista7"),
    path("aplicacion1/",views.vista1,name="vista1"),
    path("ruta2/", include("aplicacion1.ruta2")),
    path("ruta3/",views.vista3,name="vista3"),
    path("ruta4/",views.vista4,name="vista4"),
    path("ruta5/", views.vista5, name="vista5"),
    path('admin/', admin.site.urls),
]
