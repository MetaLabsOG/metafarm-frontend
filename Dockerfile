FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install git for dependencies that require it
RUN apk add --no-cache git

# Copy package files and scripts first
COPY package.json yarn.lock ./
COPY scripts ./scripts
COPY src/vendor ./src/vendor

# Install dependencies
RUN yarn config set network-timeout 600000 && \
    yarn install --frozen-lockfile --network-timeout 600000

# Copy remaining source
COPY . .

# Build with production API URL
ENV NODE_ENV=production
ENV CI=false
ENV DISABLE_ESLINT_PLUGIN=true
ENV TSC_COMPILE_ON_ERROR=true
ENV GENERATE_SOURCEMAP=false
ARG REACT_APP_COMETA_API_URL=https://api.cometa.farm/
ENV REACT_APP_COMETA_API_URL=$REACT_APP_COMETA_API_URL
RUN yarn build

# Production image — nginx for static serving
FROM nginx:alpine AS runner

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]