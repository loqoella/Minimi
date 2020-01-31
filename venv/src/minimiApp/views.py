from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from rest_framework.decorators import api_view

import yagmail

# Create your views here.

def home_view(request, *args, **kwargs): # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return render(request, "home.html", {})

def homepage_view(request, *args, **kwargs): # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return render(request, "home.html", {})


def about_view(request, *args, **kwargs): 
    print(args, kwargs)
    print(request.user)
    return render(request, "about.html", {})


def auburn_view(request, *args, **kwargs): 
    print(args, kwargs)
    print(request.user)
    return render(request, "auburn.html", {})


def campsie_view(request, *args, **kwargs):  
    print(args, kwargs)
    print(request.user)
    return render(request, "campsie.html", {})


def events_view(request, *args, **kwargs): 
    print(args, kwargs)
    print(request.user)
    return render(request, "events.html", {})
    # return redirect('https://www.facebook.com/minimiacademy/')

def event1_view(request, *args, **kwargs):  
    print(args, kwargs)
    print(request.user)
    return render(request, "event1.html", {})

def event2_view(request, *args, **kwargs): 
    print(args, kwargs)
    print(request.user)
    return render(request, "event2.html", {})

def event3_view(request, *args, **kwargs):  
    print(args, kwargs)
    print(request.user)
    return render(request, "event3.html", {})

def curriculum_view(request, *args, **kwargs): 
    print(args, kwargs)
    print(request.user)
    return render(request, "curriculum.html", {})

def curriculum1_view(request, *args, **kwargs): 
    print(args, kwargs)
    print(request.user)
    return render(request, "curriculum1.html", {})

def curriculum2_view(request, *args, **kwargs):
    print(args, kwargs)
    print(request.user)
    return render(request, "curriculum2.html", {})

def curriculum3_view(request, *args, **kwargs):
    print(args, kwargs)
    print(request.user)
    return render(request, "curriculum3.html", {})

def flexible_view(request, *args, **kwargs):
    print(args, kwargs)
    print(request.user)
    return render(request, "flexible.html", {})

def enrolment_view(request, *args, **kwargs):
    print(args, kwargs)
    print(request.user)
    return render(request, "enrolment.html", {})
   

# # for frontend email-sending
# def email_view(request, *args, **kwargs): # *args, **kwargs
#     print(args, kwargs)
#     print(request.user)
    
#     #return HttpResponse("<h1>Hello World</h1>") # string of HTML code
#     return render(request, "email_functional.html", {})

# for backend email sending
@api_view(['GET','POST'])
def email_view(request):
    if request.method == 'GET':
        return render(request, "email_functional.html", {})

    elif request.method == 'POST':
        subject = request.data['subject']
        body = request.data['body']

        yag = yagmail.SMTP(user="minimiacademy1@gmail.com",
            password='minimi12345',
            host='smtp.gmail.com'
        )

        yag.send('minimiacademy1@gmail.com', subject, body)

     
        return JsonResponse({'succeed':'ok'})


