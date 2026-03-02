FROM node:22-alpine

# Cache buster - change this value to force a fresh build
ARG CACHE_BUST=1

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 4321

ENV HOST=0.0.0.0
ENV PORT=4321

CMD ["node", "./dist/server/entry.mjs"]
