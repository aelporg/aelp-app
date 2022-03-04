FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

COPY ./dist/apps/api/package.json ./

RUN yarn install

COPY dist/apps/api ./

CMD ["node", "main.js"]
