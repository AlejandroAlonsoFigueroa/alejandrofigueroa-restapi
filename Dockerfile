FROM debian:jessie

RUN apt-get update

RUN apt-get install -y curl make g++


RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get install -y --force-yes nodejs

ADD package.json /package.json

RUN npm install

WORKDIR /src

EXPOSE 8097

CMD ["node", "/src/index.js"]
