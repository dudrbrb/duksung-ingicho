from django.shortcuts import render
from .models import Post

# CBV 방식 (class)
from django.views.generic import ListView, DetailView

class PostList(ListView):
    model = Post
    ordering = '-pk'

class PostDetail(DetailView):
    model = Post

# FBV (Function) 방식
# def index(req):
#     posts = Post.objects.all().order_by('-pk')
#     return render(
#         req,
#         "blog/index.html",
#         {
#             'posts': posts
#         }
#     )
    
# def single_page_post(req, pk):
#     post = Post.objects.get(pk=pk)
#     return render(
#         req,
#         "blog/single_page_post.html",
#         {
#             'post': post
#         }
#     )
