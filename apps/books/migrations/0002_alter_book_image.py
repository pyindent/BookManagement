# Generated by Django 5.0.1 on 2024-01-19 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.ImageField(max_length=200, upload_to='books/'),
        ),
    ]
