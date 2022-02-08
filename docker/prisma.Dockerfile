FROM node:lts-alpine3.13

WORKDIR /app

RUN yarn init -y
RUN yarn add prisma

COPY libs/models/prisma ./prisma/

ENTRYPOINT [ "yarn", "prisma" ]
