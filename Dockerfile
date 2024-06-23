FROM node:18.12.0

WORKDIR /app
COPY . .

RUN chmod +x install_prod.sh
RUN ./install_prod.sh

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
