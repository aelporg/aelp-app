FROM node:lts-alpine3.13

RUN apk add git zsh curl sudo shadow

WORKDIR /app

RUN yarn global add nx
RUN chown node:node -R .

USER node
RUN curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh | sh

COPY --chown=node:node  package.json yarn.lock ./
COPY --chown=node:node .yarn ./.yarn
COPY --chown=node:node ./.yarnrc.yml ./

RUN yarn install

CMD ["ash"]
