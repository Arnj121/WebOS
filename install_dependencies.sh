#!/bin/bash
cd /home/ec2-user/app
npm install
npm install -g pm2
cd /home/ec2-user/
git clone https://github.com/arnj121/fonty
cd /home/ec2-user/fonty
npm install
npm install -g pm2
