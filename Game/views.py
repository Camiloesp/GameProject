from django.shortcuts import render, redirect
from .models import Scores


# Create your views here.
def index(request):
    if request.method == 'POST':
        if 'start' in request.POST:
            return redirect('play')
        elif 'how' in request.POST:
            return redirect('how')
        elif 'scores' in request.POST:
            return redirect('scores')
        elif 'credits' in request.POST:
            return redirect('my_credits')
    return render(request, 'index.html')


def how(request):
    if request.method == 'POST':
        if 'back' in request.POST:
            return redirect('index')
        if 'play' in request.POST:
            return redirect('play')
    return render(request, 'how.html')


def scores(request):
    if request.method == 'POST':
        if 'back' in request.POST:
            return redirect('index')
    all_scores = Scores.objects.all().order_by('-score')
    return render(request, 'score.html', {'all_scores': all_scores})


def save_score(request):
    return render(request, 'save.html')


def play(request):
    return render(request, 'game.html')
