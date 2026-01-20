from django.http import JsonResponse
from .models import Note

def notes_list(request):
    notes = Note.objects.all().values()
    return JsonResponse(list(notes), safe=False)
