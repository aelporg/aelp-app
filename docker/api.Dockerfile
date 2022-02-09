FROM ghcr.io/aelporg/builder:latest AS builder

RUN nx run models:generate
RUN nx build api --skip-nx-cache

FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/dist/apps/api/package.json ./

RUN yarn install

COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder ./app/dist/apps/api ./

CMD ["node", "main.js"]
