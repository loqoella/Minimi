from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

import yagmail

# Create your views here.
def home_view(request, *args, **kwargs): # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    
    #return HttpResponse("<h1>Hello World</h1>") # string of HTML code
    return render(request, "home.html", {})

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


