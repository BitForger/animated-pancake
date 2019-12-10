FROM node:latest

RUN npm install -g yarn

COPY package* ./
COPY tsconfig* ./

RUN yarn install

RUN yarn run build

CMD ["yarn","run","start:prod"]
