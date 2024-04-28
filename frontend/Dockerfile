FROM node:20-alpine

WORKDIR /frontend

COPY package.json ./

RUN npm install

COPY . .

COPY .next ./.next

CMD ["npm", "run", "dev"]