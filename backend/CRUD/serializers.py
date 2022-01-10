from rest_framework import serializers 
from CRUD.models import Text_fields

class ListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Text_fields
        fields = '__all__'

    