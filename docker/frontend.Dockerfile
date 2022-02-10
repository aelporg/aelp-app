FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

RUN yarn global add next

COPY ./dist/apps/frontend/package.json ./
RUN yarn install
COPY ./dist/apps/frontend ./

CMD ["npx", "next", "start"]
