FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 2000
EXPOSE 2002

RUN node initIP <oldip> <newip>
CMD node app && node FiEx