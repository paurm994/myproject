
# Register your models here.

from django.contrib import admin
from .models import Cliente, Producto, Factura, ProductoFactura

admin.site.register(Cliente)
admin.site.register(Producto)
admin.site.register(Factura)
admin.site.register(ProductoFactura)