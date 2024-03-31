FROM node:18

WORKDIR /app
COPY . .
EXPOSE 2000
RUN npm install
CMD node app