from django.db import models


# Create your models here.
class Scores(models.Model):
    name = models.CharField(max_length=200)
    score = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name + " Score is " + str(self.score) + " the date is " + str(self.date)
