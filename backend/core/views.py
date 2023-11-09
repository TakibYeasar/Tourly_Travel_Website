from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

# # Create your views here.

 

class SocialmediaView(APIView):
    def get(self, request):
        social_obj = Socialmedia.objects.all()
        social_serializers = SocialmediaSerializer(social_obj, many=True, context={'request':request}).data
        return Response(social_serializers)



class BannerView(APIView):
    def get(self, request):
        banner_obj = Banner.objects.all()
        banner_serializers = BannerSerializer(banner_obj, many=True, context={'request':request}).data
        return Response(banner_serializers)



class AboutView(APIView):
    def get(self, request):
        about_obj = About.objects.all()
        about_serializers = AboutSerializer(about_obj, many=True, context={'request':request}).data
        return Response(about_serializers)



class ServiceView(APIView):
    def get(self, request):
        service_obj = Service.objects.all()
        service_serializers = ServiceSerializer(service_obj, many=True, context={'request':request}).data
        return Response(service_serializers)



class PlaceView(APIView):
    def get(self, request):
        place_obj = Place.objects.all()
        place_serializers = PlaceSerializer(place_obj, many=True, context={'request':request}).data
        return Response(place_serializers)


class DestinationView(APIView):
    def get(self, request):
        dest_obj = Destination.objects.all()
        dest_serializers = DestinationSerializer(dest_obj, many=True, context={'request':request}).data
        return Response(dest_serializers)


class PackageView(APIView):
    def get(self, request):
        package_obj = Package.objects.all()
        package_serializers = PackageSerializer(package_obj, many=True, context={'request':request}).data
        return Response(package_serializers)


class ReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        review_serializer = ReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            pakcage = Package.objects.filter(pk=id).first()
            if pakcage:
                review_serializer.save(customer=request.customer, package=pakcage)
                return Response(review_serializer.data , status=status.HTTP_200_OK)
            else:
                return Response({'error': "No product found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(data=review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReplayReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        review_serializer = ReplayReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            review = Review.objects.filter(pk=id).first()
            if review:
                review_serializer.save(customer=request.customer, review=review)
                return Response(review_serializer.data , status=status.HTTP_200_OK)
            else:
                return Response({'error': "No product found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(data=review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GallaryView(APIView):
    def get(self, request):
        gallary_obj = Gallary.objects.all()
        gallary_serializers = GallarySerializer(gallary_obj, many=True, context={'request':request}).data
        return Response(gallary_serializers)



class GuidesView(APIView):
    def get(self, request):
        guides_obj = Guides.objects.all()
        guides_serializers = GuidesSerializer(guides_obj, many=True, context={'request':request}).data
        return Response(guides_serializers)


class TestimonialView(APIView):
    def get(self, request):
        test_obj = Testimonial.objects.all()
        test_serializers = TestimonialSerializer(test_obj, many=True, context={'request':request}).data
        return Response(test_serializers)
    
    

class ArticlescategoryView(APIView):
    def get(self, request):
        category_obj = Articlescategory.objects.all()
        category_serializers = ArticlescategorySerializer(category_obj, many=True, context={'request':request}).data
        return Response(category_serializers)



class ArticlestagView(APIView):
    def get(self, request):
        tag_obj = Articlestag.objects.all()
        tag_serializers = ArticlestagSerializer(tag_obj, many=True, context={'request':request}).data
        return Response(tag_serializers)


class ArticlesView(APIView):
    def get(self, request, pk):
        item_obj = Articles.objects.filter(id=pk)
        item_serializer = ArticlesSerializer(item_obj, many=True, context={'request':request}).data
        return Response(item_serializer)



class ArticleReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        review_serializer = ArticleReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            article = Articles.objects.filter(pk=id).first()
            if article:
                review_serializer.save(customer=request.customer, article=article)
                return Response(review_serializer.data , status=status.HTTP_200_OK)
            else:
                return Response({'error': "No product found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(data=review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReplayArticleReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        review_serializer = ReplayArticleReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            review = ArticleReview.objects.filter(pk=id).first()
            if review:
                review_serializer.save(customer=request.customer, review=review)
                return Response(review_serializer.data , status=status.HTTP_200_OK)
            else:
                return Response({'error': "No product found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(data=review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)























