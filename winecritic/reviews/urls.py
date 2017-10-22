from django.urls import path

from . import views

app_name = 'reviews'
urlpatterns = [
  # /wine/
  path('', views.index, name='index'),
  # /wine/<int>
  path('<int:wine_id>/', views.detail, name='detail'),
  # /wine/<int>/results/
  path('<int:wine_id>/results/', views.results, name='results'),
  # /wine/<int>/vote/
  path('<int:wine_id>/vote/', views.vote, name='vote'),
]
