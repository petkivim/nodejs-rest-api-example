FROM node:12-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy source
COPY server.js /usr/src/app

EXPOSE 4000
CMD [ "npm", "start" ]
