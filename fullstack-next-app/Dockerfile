FROM node:14-alpine

ENV MONGO_DB_USERNAME=admin \
  MONGO_DB_PASSWORD=password \
  PORT=3000

WORKDIR /home/app

RUN mkdir -p /home/app

COPY . /home/app

RUN yarn

EXPOSE ${PORT}

CMD ["yarn", "dev"]