#!/bin/bash
cd /home/ec2-user/fonty
pm2 stop server.js
cd /home/ec2-user/app
pm2 stop app.js
