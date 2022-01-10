from django.db import models

# Create your models here.

class Text_fields(models.Model):

    project_title = models.CharField(max_length=500, null=True, blank=True)
    comment_body = models.TextField(max_length=1000,null=True, blank=True)

    def __str__(self):
        return self.project_title