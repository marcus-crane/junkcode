from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from .models import Wine, Vintage

class IndexView(generic.ListView):
  template_name = 'reviews/index.html'
  context_object_name = 'wine_list'

  def get_queryset(self):
    return Wine.objects.all()

class DetailView(generic.DetailView):
  model = Wine
  template_name = 'reviews/detail.html'

class ResultsView(generic.DetailView):
  model = Wine
  template_name = 'reviews/results.html'

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