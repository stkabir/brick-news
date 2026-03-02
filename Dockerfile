# Stage 1: Build
FROM node:22-alpine AS build

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Stage 2: Run
FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Bundle current content as defaults (used to init volume on first deploy)
COPY --from=build /app/src/content ./src/content-default

# Empty dir that will be overridden by the Docker volume
RUN mkdir -p ./src/content

COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

EXPOSE 4321

ENV HOST=0.0.0.0
ENV PORT=4321

ENTRYPOINT ["./docker-entrypoint.sh"]
