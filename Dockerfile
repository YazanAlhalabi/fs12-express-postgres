FROM node:alpine

WORKDIR /var/www/html
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "run", "start:dev"]
