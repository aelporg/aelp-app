FROM ghcr.io/aelporg/builder:latest AS builder

ARG NEXT_PUBLIC_GRAPHQL_API_ENDPOINT=/api/graphql
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID

RUN nx build frontend

FROM node:lts-alpine3.13

WORKDIR /app

ENV NODE_ENV production

RUN yarn global add next

COPY ./dist/apps/frontend/package.json ./
RUN yarn install
COPY ./dist/apps/frontend ./


CMD ["npx", "next", "start"]
