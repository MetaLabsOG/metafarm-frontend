FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package.json yarn.lock ./
COPY src/vendor ./src/vendor
RUN yarn config set network-timeout 600000 && \
    yarn install --frozen-lockfile --network-timeout 600000

# Copy source
COPY . .

# Build
ENV NODE_ENV=production
ENV CI=false
ENV DISABLE_ESLINT_PLUGIN=true
ENV TSC_COMPILE_ON_ERROR=true
ENV GENERATE_SOURCEMAP=false
RUN yarn build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Install serve
RUN yarn global add serve

# Copy built assets
COPY --from=builder /app/build ./build

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build"]