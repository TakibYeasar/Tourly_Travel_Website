from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('socialmedia/', SocialmediaView.as_view()),
    path('banner/', BannerView.as_view()),
    path('about/', AboutView.as_view()),
    path('service/', ServiceView.as_view()),
    path('place/', PlaceView.as_view()),
    path('destination/', DestinationView.as_view()),
    path('package/', PackageView.as_view()),
    path('review/', ReviewView.as_view()),
    path('replay-review/', ReplayReviewView.as_view()),
    path('gallary/', GallaryView.as_view()),
    path('guides/', GuidesView.as_view()),
    path('testimonial/', TestimonialView.as_view()),
    path('articles-cat/', ArticlescategoryView.as_view()),
    path('articles-tag/', ArticlestagView.as_view()),
    path('articles/', ArticlesView.as_view()),
    path('articles-review/', ArticleReviewView.as_view()),
    path('replay-articles-review/', ReplayArticleReviewView.as_view()),
]
