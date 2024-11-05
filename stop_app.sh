#!/bin/bash
if [ -d  "/home/ec2-user/fonty" ]; then
  cd /home/ec2-user/fonty
  pm2 stop server.js
else
  echo "doesn't exist"
fi
if [ -d  "/home/ec2-user/app" ]; then
  cd /home/ec2-user/app
  pm2 stop app.js
else
  echo "doesn't exist"
fi
