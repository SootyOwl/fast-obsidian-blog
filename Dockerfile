FROM node:23-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# chown
RUN chown -R node:node /app

USER node
RUN mkdir content _site 
VOLUME [ "/app/content" ]
ENTRYPOINT [ "npx", "@11ty/eleventy", "--serve" ]