from django.urls import path
from .views import (
    home_view, 
    email_view,
    # SendEmail,
)
# from django.conf.urls import include, url

app_name = 'products'
urlpatterns = [
    path('', home_view, name='home'),

   # path('about/', about_view, name='about' ),


    # for frontend email-sending
    # path('email/', email_view, name='email_feedback' ), 

    # for backend email sending
    path('email/', email_view, name='email_feedback' ),


    # path('create/', product_create_view, name='product-list'),
    # path('<int:id>/', product_detail_view, name='product-detail'),
    # path('<int:id>/update/', product_update_view, name='product-update'),
    # path('<int:id>/delete/', product_delete_view, name='product-delete'),
]