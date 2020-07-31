#!/bin/bash
npm run build
cd dist
git add .
git commit -m "deploy app"
git push -f git@github.com:MaksOuw/darts-app master:gh-pages
