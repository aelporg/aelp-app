FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

RUN npm install -g next

COPY ./dist/apps/frontend ./

CMD ["npx", "next", "start"]
