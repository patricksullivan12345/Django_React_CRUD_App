from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import parser_classes
from CRUD.models import Text_fields
from CRUD.serializers import ListSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([JSONParser])
def taskList(request):

    #View all posts
    if request.method == 'GET':

        list = Text_fields.objects.all()

        list_serializer = ListSerializer(list, many=True)

        return JsonResponse(list_serializer.data, safe=False)
 
    #Create a post
    elif request.method == 'POST':

        #Use JSON raw under "Body" in postman.
        list_serializer = ListSerializer(data=request.data)

        if list_serializer.is_valid():

            list_serializer.save()

            return JsonResponse(list_serializer.data, status=status.HTTP_201_CREATED) 

        return JsonResponse(list_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def taskDetail(request, pk):

    post_detail = Text_fields.objects.get(pk=pk)
 
    #View a post
    if request.method == 'GET': 

        post_serializer = ListSerializer(post_detail) 

        return JsonResponse(post_serializer.data) 
    

    #Edit a post
    elif request.method == 'PUT': 

        post_data = JSONParser().parse(request) 
        post_serializer = ListSerializer(post_detail, data=post_data) 

        if post_serializer.is_valid(): 

            post_serializer.save() 

            return JsonResponse(post_serializer.data) 

        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    #Delete a post
    elif request.method == 'DELETE': 

        post_detail.delete() 

        return JsonResponse({'message': 'Post was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def taskQuery(request):

    #Query
    postQuery = Text_fields.objects.all()

    #View all objects    
    if request.method == 'GET': 
        output = ListSerializer(postQuery, many=True)
        return JsonResponse(output.data, safe=False)

    #Delete all objects
    elif request.method == 'DELETE':
        count = Text_fields.objects.all().delete()
        return JsonResponse({'message': '{} Posts were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

def helloworld(request):
    return JsonResponse("Hello world!")

