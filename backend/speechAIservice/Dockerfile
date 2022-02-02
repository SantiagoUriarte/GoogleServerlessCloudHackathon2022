FROM node:14 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3003

EXPOSE 3003