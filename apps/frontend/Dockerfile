FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

COPY ./dist/apps/frontend/package.json ./
COPY .yarn ./.yarn
COPY ./.yarnrc.yml ./
RUN yarn install
COPY ./dist/apps/frontend ./


CMD ["pm2-runtime", "main.js"]
