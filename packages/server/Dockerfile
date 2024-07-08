FROM node:slim
ENV PNPM_HOME="/pnpm"
ENV HOME="$PNPM_HOME:$HOME"
RUN corepack enable
WORKDIR /usr/src/momentum
COPY packages/eslint-config packages/eslint-config
COPY packages/shared packages/shared
COPY packages/server packages/server
COPY package.json pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN pnpm run -r build
EXPOSE 3000
ENTRYPOINT [ "pnpm", "--filter", "@momentum/server", "prod" ]
