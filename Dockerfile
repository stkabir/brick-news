FROM node:22-alpine

# Cache buster - change this value to force a fresh build
ARG CACHE_BUST=1
ARG LARAVEL_API_URL=http://127.0.0.1:8000

RUN npm install -g pnpm@10.30.3

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . .
RUN NODE_ENV=production LARAVEL_API_URL=${LARAVEL_API_URL} pnpm run build

EXPOSE 4321

ENV HOST=0.0.0.0
ENV PORT=4321

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:4321/api/health || exit 1

CMD ["node", "./dist/server/entry.mjs"]
