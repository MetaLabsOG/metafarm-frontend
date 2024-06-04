#!/bin/bash

set -e
set -x

echo "Installing Node.js 18.12.0"
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

node -v
npm -v

corepack enable

corepack prepare yarn@4.2.2 --activate

yarn install

yarn build
