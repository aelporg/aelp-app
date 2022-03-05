FROM node:lts-alpine3.13

RUN apk add git zsh curl sudo shadow docker-cli

WORKDIR /app

RUN npm install -g nx pnpm
RUN chown node:node -R .
RUN groupadd --gid 967 docker
RUN usermod -a -G docker node

USER node
RUN curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh | sh

CMD ["ash"]
