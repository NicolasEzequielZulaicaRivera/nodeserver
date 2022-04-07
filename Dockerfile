FROM node:17

WORKDIR /server

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=80

EXPOSE 80

CMD ["npm", "start"]