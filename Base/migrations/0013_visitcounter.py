# Generated by Django 4.1.7 on 2023-03-21 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Base', '0012_alter_tutorial_topic'),
    ]

    operations = [
        migrations.CreateModel(
            name='VisitCounter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=0)),
            ],
        ),
    ]
