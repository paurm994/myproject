
from django.urls import path
from . import views

urlpatterns = [
   # path('admin/', admin.site.urls),
   path('members/', views.members, name='members'),
   path('', views.members, name='members'),
]
