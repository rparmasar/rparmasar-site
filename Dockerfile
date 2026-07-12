FROM node:18-alpine AS build

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN npm ci

COPY public/ public/
COPY src/ src/
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 8080
