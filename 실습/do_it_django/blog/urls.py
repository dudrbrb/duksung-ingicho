from django.urls import path
from . import views

urlpatterns = [
    # CBV 방식 (class)
    path('', views.PostList.as_view()),
    path('/<int:pk>', views.PostDetail.as_view()),

    # FBV (Function) 방식
    # path('', views.index),
    # path('/<int:pk>', views.single_page_post),
]