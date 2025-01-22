FROM node:23-slim AS builder
WORKDIR /app
RUN mkdir content
VOLUME [ "/app/content" ]
COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT [ "npx", "@11ty/eleventy", "--serve" ]