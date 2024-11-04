#!/bin/bash
cd /home/ec2-user/app
npm install
node initIP
cd /home/ec2-user/
mkdir fonty
cd /home/ec2-user/fonty
git clone https://github.com/arnj121/fonty
npm install
node initIP
