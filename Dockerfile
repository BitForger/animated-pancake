FROM node:latest

COPY package* ./
COPY tsconfig* ./

RUN yarn install

RUN yarn run build

CMD ["yarn","run","start:prod"]
