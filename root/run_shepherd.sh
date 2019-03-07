#!/bin/bash

# FLASK_APP=shepherd /root/env/bin/flask run --host 0.0.0.0 --port 80 >/root/shepherd.log 2>&1 &
cd /root/shepherd2
#pipenv run python app.py
source /root/.local/share/virtualenvs/shepherd2-rSdGMoSR/bin/activate
python app.py
