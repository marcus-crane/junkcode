from django.db import models

class Wine(models.Model):
  '''Define a wine model which can contain multiple vintages ()'''
  def __str__(self):
    return self.name

  def is_cheap(self):
    price = self.price
    if price < 15:
      return True
    else:
      return False
  is_cheap.short_description = 'Under $15?'

  # I'm going to leave out a lot of types for the sake of readability
  TYPES = (
    ('CH', 'Chardonnay'),
    ('PB', 'Pinot Blanc'),
    ('PG', 'Pinot Gris'),
    ('RS', 'Riesling'),
    ('SB', 'Sauvignon Blanc'),
    ('SG', 'Sauvignon Gris'),
    ('ME', 'Merlot'),
    ('PN', 'Pinot Noir'),
  )
  name = models.CharField(max_length=200)
  type = models.CharField(max_length=50)
  price = models.IntegerField()

class Vintage(models.Model):
  '''Define a vintage, of which there is usually one per year'''
  def __str__(self):
    return str(self.year)

  wine = models.ForeignKey(Wine, on_delete=models.CASCADE)
  year = models.DateField('year produced')
  rating = models.IntegerField(default=0)
  votes = models.IntegerField(default=0)
