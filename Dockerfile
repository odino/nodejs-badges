FROM iojs:2.0

RUN npm install -g nodemon
COPY . /src
WORKDIR /src

CMD iojs index.js