#!/bin/bash
cd /home/ec2-user/app
npm install
node initIP
cd /home/ec2-user/
git clone https://github.com/arnj121/fonty
cd /home/ec2-user/fonty
npm install
node initIP
