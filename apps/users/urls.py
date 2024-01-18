from django.urls import path
from .views import RegisterView

urlpatterns = [
    # path("login/", name="login"),
    path("register/", RegisterView.as_view(), name="auth_register")
]