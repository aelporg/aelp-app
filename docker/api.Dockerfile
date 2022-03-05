FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

COPY ./dist/apps/api/package.json ./

RUN npm i -g pnpm@latest
RUN pnpm install

COPY libs/models/prisma ./prisma
RUN node ./prisma/remove-nestjsgraphql.js
RUN pnpm exec prisma generate
COPY dist/apps/api ./

CMD ["node", "main.js"]
