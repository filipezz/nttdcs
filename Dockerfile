FROM node:12

WORKDIR  /usr/src/app

COPY package.json .

RUN npm install --only=production

COPY ./dist ./dist

EXPOSE 3333

CMD ["npm", "start"]