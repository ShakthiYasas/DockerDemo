FROM node:14.15.1
ENV VERSION='1.0.0'
LABEL name="demo"

WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

RUN echo 'This stage is passed!'

CMD ["npm", "start"]