from django.urls import path
from . import views

urlpatterns = [ 
    path('post-list/',views.taskList, name="Task list"),
    path('post-detail/<str:pk>/',views.taskDetail, name="Task detail"),
    path('post-published/',views.taskQuery, name="Task Query"),
    path('helloworld/',views.helloworld, name="Hello world")
]