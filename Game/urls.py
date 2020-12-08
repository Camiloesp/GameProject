from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('how/', views.how, name='how'),
    path('scores/', views.scores, name='scores'),
    path('play/', views.play, name='play'),
    path('play/your-score/', views.save_score, name='save')
]
