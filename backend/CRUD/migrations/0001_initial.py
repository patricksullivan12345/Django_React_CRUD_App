# Generated by Django 3.2.2 on 2021-05-07 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Text_fields',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_title', models.CharField(blank=True, max_length=100, null=True)),
                ('comment_body', models.TextField(blank=True, max_length=500, null=True)),
            ],
        ),
    ]
