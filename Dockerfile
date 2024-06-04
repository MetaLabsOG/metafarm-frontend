FROM node:16

COPY install_prod.sh .

RUN ./install_prod.sh

WORKDIR /workspace

COPY . .

RUN yarn prod

CMD ["yarn", "start"]
