FROM node:12

ARG PORT=7000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
