#!/bin/bash
python3 -m http.server 8000 -d _site &
watch python3 makesite.py
