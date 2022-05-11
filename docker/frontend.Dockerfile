FROM node:lts-alpine3.13

WORKDIR /app

RUN npm install -g pnpm next

COPY ./dist/apps/frontend/package.json ./
RUN pnpm install
COPY ./dist/apps/frontend ./

CMD ["npx", "next", "start"]
