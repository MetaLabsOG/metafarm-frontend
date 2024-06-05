#!/bin/bash

corepack enable

corepack prepare yarn@4.2.2 --activate

yarn install

yarn build
