FROM node:lts-alpine3.13

RUN apk add git zsh curl sudo shadow

WORKDIR /app

RUN npm install -g nx pnpm
RUN chown node:node -R .

USER node
RUN curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh | sh

CMD ["ash"]
