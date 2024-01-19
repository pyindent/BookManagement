from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Book(models.Model):
    title = models.CharField(null=False, blank=False, max_length=100)
    image = models.ImageField(max_length=200, upload_to="books/")
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=True)
    desc = models.TextField(default="")

    def __str__(self) -> str:
        return self.title
