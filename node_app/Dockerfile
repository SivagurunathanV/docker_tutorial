# base image
FROM node:alpine

WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install

COPY ./ ./

# Run commands on container
CMD [ "npm", "start" ]