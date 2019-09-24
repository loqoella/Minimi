from django.urls import path
from .views import (
    home_view, 
)

app_name = 'products'
urlpatterns = [
    path('home/', home_view, name='home'),
    # path('create/', product_create_view, name='product-list'),
    # path('<int:id>/', product_detail_view, name='product-detail'),
    # path('<int:id>/update/', product_update_view, name='product-update'),
    # path('<int:id>/delete/', product_delete_view, name='product-delete'),
]