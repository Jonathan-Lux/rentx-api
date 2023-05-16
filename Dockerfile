FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

RUN apt-get update && apt-get install -y nodejs npm


COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]