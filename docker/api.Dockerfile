FROM node:lts-alpine3.13

WORKDIR /app

COPY ./dist/apps/api/package.json ./

RUN apk add --no-cache python3
RUN npm install
RUN npm i tslib

COPY libs/models/prisma ./prisma
RUN node ./prisma/remove-nestjsgraphql.js
RUN npx prisma generate
COPY dist/apps/api ./

CMD ["node", "main.js"]
