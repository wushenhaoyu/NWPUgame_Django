from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from openai import OpenAI, OpenAIError
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


from openai import OpenAI, OpenAIError
import os
from django.http import JsonResponse

def chat_with_gpt(request):
    if request.method == 'POST':
        message = request.POST.get('message', '')  # 获取POST请求中的消息内容

        client = OpenAI()
        client.api_key = os.environ.get('OPENAI_API_KEY')

        preset_messages = [
            {"role": "system", "content": "你是一个西北工业大学的校园导游,你的回答需要是中文"},
        ]

        try:
            response = client.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=preset_messages + [{"role": "user", "content": message}]
            )
        except OpenAIError as e:
            return JsonResponse({'error': 'OpenAI API call failed: ' + str(e)})

        completion = response.choices[0].message['content']  # 获取返回的对话内容

        return JsonResponse({'completion': completion})

    return JsonResponse({'error': 'Only POST requests are allowed.'})