from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os

# Create your views here.
def index(request):
    return render(request, 'main.html', context={'hello': 'world'})
    
def game(request):
    return render(request, 'index.html', context={'hello': 'world'})

def author(request):
    print(request)
    return HttpResponse("Tencent Cloud Serverless Team")



def serve_video(request, video_name):
    video_path = os.path.join(settings.STATICFILES_DIRS[0], 'videos', video_name)
    if os.path.exists(video_path):
        with open(video_path, 'rb') as video_file:
            response = HttpResponse(video_file.read(), content_type='video/mp4')
            return response
    else:
        return HttpResponse("Video not found", status=404)
