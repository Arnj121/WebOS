#!/bin/bash
cd /home/ec2-user/app
pm2 stop app.js
pm2 start app.js
cd /home/ec2-user/fonty
pm2 stop server.js
pm2 start server.js

