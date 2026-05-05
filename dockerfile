FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

COPY be/package.json ./be/package.json

RUN corepack enable && yarn install --frozen-lockfile

COPY . .

WORKDIR /app/be

RUN yarn install --frozen-lockfile

RUN yarn build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock ./

COPY be/package.json ./be/package.json

RUN corepack enable && yarn install --frozen-lockfile --production

COPY --from=builder /app/be/dist/ ./dist/

CMD ["node", "dist/main.js"]