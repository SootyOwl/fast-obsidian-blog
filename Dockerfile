FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json eleventy.config.js ./
RUN npm ci --omit=dev \
    && mkdir -p _site

# Runtime
FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
COPY --from=builder /app /app
VOLUME ["/app/content"]
EXPOSE 8080
CMD ["/app/node_modules/.bin/eleventy", "--serve"]
