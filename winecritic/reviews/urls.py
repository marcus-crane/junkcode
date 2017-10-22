from django.urls import path

from . import views

app_name = 'reviews'
urlpatterns = [
  # /wine/
  path('', views.IndexView.as_view(), name='index'),
  # /wine/<int>
  path('<int:pk>/', views.DetailView.as_view(), name='detail'),
  # /wine/<int>/results/
  path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
  # /wine/<int>/vote/
  path('<int:wine_id>/vote/', views.vote, name='vote'),
]
