FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

COPY ./dist/apps/frontend/package.json ./
RUN npm install
COPY ./dist/apps/frontend ./

CMD ["npx", "next", "start"]
