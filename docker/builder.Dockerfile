FROM node:lts-alpine3.13

WORKDIR /app

RUN yarn global add nx
RUN apk add git

COPY  package.json yarn.lock ./
COPY .yarnrc.yml .
COPY ./.yarn .yarn

RUN yarn install

COPY . .

CMD [ "echo", "Use it in a stage" ]
