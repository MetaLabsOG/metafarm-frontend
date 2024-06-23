FROM node:18.12.0

WORKDIR /
COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable && corepack prepare yarn@4.2.2 --activate
RUN yarn install

COPY . .

RUN yarn install
RUN yarn prod

EXPOSE 3000

CMD ["yarn", "start"]
