# WebOS: A web-based operating system
A web-based operating system that allows virtualization of an operating system which can be accessed through a web browser. 
Virtualization services that provides users with easy access to a web-based OS and services through applications within the OS.
### Table of Contents
- <a href='#installation'>Installation</a>
- <a href="#usage">Usage</a>
- <a href='#demos'>Demos</a>
- <a href="#features">Features</a> 
- <a href="#contribution">Contribution</a>
## Installation
### Installation using node and express
- Install [NodeJS](https://nodejs.org/en/download) by selecting your Operating System.
- Install [MongoDB](https://www.mongodb.com/try/download/community) Community server by selecting your Operating System.
- Clone this repo using ``git clone https://github.com/Arnj121/webOS.git``
- clone the fonty repo for fonts using ``git clone https://github.com/Arnj121/fonty.git``
- see the [README](https://github.com/Arnj121/fonty/blob/master/README.md) file for installation of fonty.
- run ``npm install`` to install all dependencies.
- navigate to the bin folder where MongoDB is installed.
- start MongoDB server using ``mongod.exe --dbpath <data directory>``
- start the app using ``node app`` and ``node FiFx``
- access the application on [https://localhost:2000/](https://localhost:2000/).
- port can be changed in the **app.js** file
### Installation using docker
- Install [MongoDB](https://www.mongodb.com/try/download/community) Community server by selecting your Operating System.
- Download [docker](https://www.docker.com/products/docker-desktop/)
- Start the docker desktop and the docker engine.
- Download the [fonty](https://drive.google.com/file/d/1jK41LPtjr27-7bH_ZFq-6-eKSxzHDju8/view?usp=sharing) image and [webOS](https://drive.google.com/file/d/1jmGGLbP6U9lwTEFjua2LP87HqbenT1Rf/view?usp=sharing) image
- Navigate to the downloaded folder and open the terminal
- Do ``docker load --image <name of .tar file>`` for both the images.
- Start MongoDB.(see <a href='#installation'>Installation</a> section of MongoDB).
- Start the images using ``docker run -d -p 2045:2045 fonty`` and ``docker run -d -p 2000:2000 webos``
- In a browser, type <a href='http://localhost:2000'>http://localhost:2000</a> to start the app.
## Demos

## Features
- Allows customizable User interface.
- easy integration of feature applications within the OS.
- custom template to design applications for the OS.

## Contribution
&nbsp;
The application is constantly going through changes and the addition of new features. If you want to integrate a new application into the OS, follow these steps
- run ``node create-app <app-name> <app-id>`` to create a template for the app.
- open the **<app-name>** directory which contains the html, javascript and css file.
- Edit these files just like you would to design a website.
- Refer the ``static/apps/sys/xo23qwrr`` folder as a guide.
- upon reloading, you'll find the app inside the application.
