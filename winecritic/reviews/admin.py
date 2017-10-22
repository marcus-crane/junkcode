from django.contrib import admin

from .models import Vintage, Wine

class VintageInline(admin.TabularInline):
  model = Vintage
  extra = 3

class WineAdmin(admin.ModelAdmin):
  list_display = ('name', 'type', 'price', 'is_cheap')
  list_filter = ['type']
  search_fields = ['type']
  fieldsets = [
    (None, {'fields': ['name', 'type']}),
    ('Stock info', {'fields': ['price']})
  ]
  inlines = [VintageInline]

admin.site.register(Wine, WineAdmin)