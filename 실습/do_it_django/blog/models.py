from django.db import models


class Post(models.Model):
    # DB col을 생성하는데, model -> title
    title = models.CharField(max_length=30)

    # DB col을 생성하는데, model -> content
    content = models.TextField()

    # DB col을 생성하는데, model -> 시간
    # 새 글 작성 시 현재 시간 자동 기입
    create_at = models.DateTimeField(auto_now_add=True)
    # 글 수정 시 수정 시간 자동 기입
    update_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'[{self.pk}] {self.title}'
    
    def get_absolute_url(self):
        return f'/blog/{self.pk}'