FROM node:lts-alpine3.13

WORKDIR /app


ENV NODE_ENV production

COPY ./dist/apps/api/package.json ./
COPY .yarn ./.yarn
COPY ./.yarnrc.yml ./
RUN yarn install
COPY node_modules/.prisma ./node_modules/.prisma
COPY ./dist/apps/api ./


CMD ["node", "main.js"]
