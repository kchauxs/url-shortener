FROM node:16.15.0
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
EXPOSE 3033
CMD [ "yarn", "start" ]