from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse

from .models import Wine

def index(request):
  wine_list = Wine.objects.order_by('name')[:5]
  context = {'wine_list': wine_list}
  return render(request, 'reviews/index.html', context)

def detail(request, wine_id):
  wine = get_object_or_404(Wine, pk=wine_id)
  return render(request, 'reviews/detail.html', {'wine':wine})

def results(request, wine_id):
  wine = get_object_or_404(Wine, pk=wine_id)
  return render(request, 'reviews/results.html', {'wine': wine})

def vote(request, wine_id):
  wine = get_object_or_404(Wine, pk=wine_id)
  try:
    selected_choice = wine.vintage_set.get(pk=request.POST['vintage'])
  except (KeyError, Wine.DoesNotExist):
    return render(request, 'reviews/detail.html', {
      'wine': wine,
      'error_message': "You didn't select a choice."
    })
  else:
    selected_choice.votes += 1
    selected_choice.save()
    return HttpResponseRedirect(reverse('reviews:results', args=(wine.id,)))