# Generated by Django 3.1.5 on 2021-01-13 09:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration_profile', '0003_registrationprofile_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registrationprofile',
            name='email',
        ),
    ]
