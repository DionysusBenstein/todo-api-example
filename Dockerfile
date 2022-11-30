FROM node:19.1
WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
