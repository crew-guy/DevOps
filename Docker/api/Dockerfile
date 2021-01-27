FROM node:14.14.0-alpine3.10
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js