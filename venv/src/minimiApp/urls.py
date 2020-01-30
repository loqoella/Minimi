from django.urls import path
from .views import (
    home_view,
    homepage_view,
    email_view,
    about_view,
    auburn_view,
    campsie_view,
    events_view,
    event1_view,
    event2_view,
    event3_view,
    curriculum_view,
    curriculum1_view,
    curriculum2_view,
    curriculum3_view,
    flexible_view,
    enrolment_view,

    # SendEmail,
)
# from django.conf.urls import include, url

app_name = 'products'
urlpatterns = [
    path('', home_view, name='home'),
    path('home', homepage_view, name='homepage'),
    path('about', about_view, name='about' ),
    path('auburn', auburn_view, name='auburn' ),
    path('campsie', campsie_view, name='campsie' ),
    path('events', events_view, name='events' ),
    # path('events', lambda request: redirect('https://www.facebook.com/minimiacademy/')),
    path('event1', event1_view, name='event1' ),
    path('event2', event2_view, name='event2' ),
    path('event3', event3_view, name='event3' ),
    path('curriculum', curriculum_view, name='curriculum' ),
    path('curriculum1', curriculum1_view, name='curriculum1' ),
    path('curriculum2', curriculum2_view, name='curriculum2' ),
    path('curriculum3', curriculum3_view, name='curriculum3' ),
    path('flexible', flexible_view, name='flexible' ),
    path('enrolment', enrolment_view, name='enrolment' ),



    # for frontend email-sending
    # path('email/', email_view, name='email_feedback' ), 

    # for backend email sending
    path('email/', email_view, name='email_feedback' ),


    # path('create/', product_create_view, name='product-list'),
    # path('<int:id>/', product_detail_view, name='product-detail'),
    # path('<int:id>/update/', product_update_view, name='product-update'),
    # path('<int:id>/delete/', product_delete_view, name='product-delete'),
]