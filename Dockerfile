FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run prestart

RUN npm run seed

CMD ["npm","start"]