from django.shortcuts import render

def landing(req):
    return render(
        req,
        'single_page/landing.html'
    )

def about_me(req):
    return render(
        req,
        'single_page/about_me.html'
    )