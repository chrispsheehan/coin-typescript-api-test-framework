FROM node:alpine

COPY ./src ./src

WORKDIR /src

RUN npm install typescript -g \
&& npm install tsc \
&& yarn \
&& npm install

ENTRYPOINT [ "npm", "run" ]