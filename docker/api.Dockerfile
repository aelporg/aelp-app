FROM node:lts-alpine3.13

WORKDIR /app

COPY ./dist/apps/api/package.json ./

RUN apk add --no-cache python3
RUN npm i -g pnpm@latest
RUN pnpm install
RUN pnpm i tslib

COPY libs/models/prisma ./prisma
RUN node ./prisma/remove-nestjsgraphql.js
RUN pnpm exec prisma generate
COPY dist/apps/api ./

CMD ["node", "main.js"]
