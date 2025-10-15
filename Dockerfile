FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json
RUN npm ci
COPY . .
RUN npm run builder

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci
COPY
COPY .env ./.env
EXPOSE 3000
CMD ["node", "dist/main.js"]