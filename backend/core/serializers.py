from rest_framework import serializers
from .models import *


class SocialmediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socialmedia
        fields = "__all__"


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")



class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = "__all__"
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['place'] = PlaceSerializer(instance.place, context={'request':request}).data
        return response


class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"
        depth = 1
        
        
class ReplayReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReplayReview
        fields = "__all__"
        depth = 1


class GallarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallary
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")



class GuidesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guides
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")



class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")
    

class ArticlescategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Articlescategory
        fields = "__all__"
    
    
class ArticlestagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articlestag
        fields = "__all__"
    
    

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")




class ArticleReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleReview
        fields = "__all__"



class ReplayArticleReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReplayArticleReview
        fields = "__all__"



class NewslatterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newslatter
        fields = "__all__"







