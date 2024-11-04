#!/bin/bash
cd /home/ec2-user/app
node app.js &
cd /home/ec2-user/fonty
node server.js &

