FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

RUN npm install -g pnpm next

COPY ./dist/apps/frontend/package.json ./
RUN pnpm install
COPY ./dist/apps/frontend ./

CMD ["npx", "next", "start"]
