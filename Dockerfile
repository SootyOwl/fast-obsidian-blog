FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json eleventy.config.js ./

RUN npm ci --omit=dev --omit=optional \
    && npm cache clean --force \
    && mkdir -p _site


# Runtime
FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
COPY --from=builder /app /app
# include your local bins so "eleventy" is found
ENV PATH=/app/node_modules/.bin:$PATH
VOLUME ["/app/content"]
EXPOSE 8080
CMD ["/app/node_modules/.bin/eleventy", "--serve"]
