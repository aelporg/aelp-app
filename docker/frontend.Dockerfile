FROM node:lts-alpine3.13

WORKDIR /app

RUN npm install -g next

COPY ./dist/apps/frontend/package.json ./
RUN npm install
COPY ./dist/apps/frontend ./

CMD ["npx", "next", "start"]
