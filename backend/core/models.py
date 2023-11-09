from django.db import models
from authapi.models import CustomUser
from django.shortcuts import reverse

# Create your models here.


class Socialmedia(models.Model):
    facebook = models.CharField(max_length=150, blank=True, null=True)
    twitter = models.CharField(max_length=150, blank=True, null=True)
    linkedin = models.CharField(max_length=150, blank=True, null=True)
    instagram = models.CharField(max_length=150, blank=True, null=True)
    youtube = models.CharField(max_length=150, blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Social Media'
    
    def __str__(self):
        return self.facebook


class Banner(models.Model):
    image = models.ImageField(upload_to='banner/')
    title = models.CharField(max_length=255, blank=True, null=True)
    desc = models.TextField(blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Banners'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:banner", kwargs={
            'slug': self.slug
        })


class About(models.Model):
    about_img = models.ImageField(upload_to="about/")
    about_two = models.ImageField(upload_to="about/", blank=True, null=True)
    about_three = models.ImageField(upload_to="about/", blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    subtitle = models.CharField(max_length=255, blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'About'
    
    def __str__(self):
        return self.title
    

class Service(models.Model):
    image = models.ImageField(upload_to='service/')
    title = models.CharField(max_length=255, blank=True, null=True)
    subtitle = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Service'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:service", kwargs={
            'slug': self.slug
        })


class Place(models.Model):
    image = models.ImageField(upload_to='place/')
    country = models.CharField(max_length=100, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    desc = models.TextField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Places'
        ordering = ('-created',)

    def __str__(self):
        return self.image
    
    def get_absolute_url(self):
        return reverse("core:place", kwargs={
            'slug': self.slug
        })


class Destination(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    subtitle = models.CharField(max_length=255, blank=True, null=True)
    place = models.ManyToManyField(Place, null=True, blank=True)
    
    class Meta:
        verbose_name_plural = 'Destination'
    
    def __str__(self):
        return self.title



class Package(models.Model):
    image = models.ImageField(upload_to='place/')
    title = models.CharField(max_length=255, blank=True, null=True)
    subtitle = models.CharField(max_length=255, blank=True, null=True)
    days = models.CharField(max_length=10, blank=True, null=True)
    nights = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    price = models.CharField(max_length=100, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Package'
        ordering = ('-created',)

    def __str__(self):
        return self.image
    
    def get_absolute_url(self):
        return reverse("core:package", kwargs={
            'slug': self.slug
        })



class Review(models.Model):
    pakcage = models.ForeignKey(Package, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    comment = models.TextField()
    rate = models.IntegerField(default=0)
    likes = models.ManyToManyField(CustomUser, null=True, blank=True)
    dislikes = models.ManyToManyField(CustomUser, null=True, blank=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Pakcage Reviews'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.pakcage} From: {self.customer}"
    
    
    
class ReplayReview(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    package = models.ForeignKey(Package, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    comment = models.TextField()
    rate = models.IntegerField(default=0)
    likes = models.ManyToManyField(CustomUser, null=True, blank=True)
    dislikes = models.ManyToManyField(CustomUser, null=True, blank=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Replay Reviews'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.review} From: {self.customer}"



class Gallary(models.Model):
    image = models.ImageField(upload_to='gallary/')
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Gallary'
        ordering = ('-created',)

    def __str__(self):
        return self.image
    
    def get_absolute_url(self):
        return reverse("core:gallary", kwargs={
            'slug': self.slug
        })



class Guides(models.Model):
    image = models.ImageField(upload_to='guides/')
    name = models.CharField(max_length=255, blank=True, null=True)
    designation = models.CharField(max_length=255, blank=True, null=True)
    facebook = models.CharField(max_length=150, blank=True, null=True)
    twitter = models.CharField(max_length=150, blank=True, null=True)
    linkedin = models.CharField(max_length=150, blank=True, null=True)
    instagram = models.CharField(max_length=150, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Guides'
        ordering = ('-created',)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("core:guides", kwargs={
            'slug': self.slug
        })




class Testimonial(models.Model):
    image = models.ImageField(upload_to='testimonial/')
    name = models.CharField(max_length=255, blank=True, null=True)
    profession = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Testimonial'
        ordering = ('-created',)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("core:testimonial", kwargs={
            'slug': self.slug
        })



class Articlescategory(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Article Category'
        ordering = ('-created',)
    
    def __str__(self):
        return self.title
    
    
    
class Articlestag(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Article Tags'
        ordering = ('-created',)
    
    def __str__(self):
        return self.title
    
    

class Articles(models.Model):
    image = models.ImageField(upload_to='articles/')
    title = models.CharField(max_length=150, blank=True, null=True)
    category = models.ManyToManyField(Articlescategory)
    date = models.DateField(auto_now_add=True)
    description = models.TextField(blank=True, null=True)
    tags = models.ManyToManyField(Articlestag, blank=True, null=True)
    likes = models.ManyToManyField(CustomUser, null=True, blank=True)
    dislikes = models.ManyToManyField(CustomUser, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Articles'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:articles", kwargs={
            'slug': self.slug
        })
    
    
class ArticleReview(models.Model):
    article = models.ForeignKey(Articles, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    comment = models.TextField()
    rate = models.IntegerField(default=0)
    likes = models.ManyToManyField(CustomUser, null=True, blank=True)
    dislikes = models.ManyToManyField(CustomUser, null=True, blank=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Article Reviews'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.product} From: {self.customer}"
    
    
    
class ReplayArticleReview(models.Model):
    review = models.ForeignKey(ArticleReview, on_delete=models.CASCADE)
    article = models.ForeignKey(Articles, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    comment = models.TextField()
    rate = models.IntegerField(default=0)
    likes = models.ManyToManyField(CustomUser, null=True, blank=True)
    dislikes = models.ManyToManyField(CustomUser, null=True, blank=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Replay Article Reviews'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.product} From: {self.customer}"



class Newslatter(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=16, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Newslatter'
        ordering = ('-created',)
    
    def __str__(self):
        return self.email







