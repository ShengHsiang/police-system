#!/usr/bin/env sh

# 當錯誤發生終止腳本
set -e

# 構建
npm run build

# cd 到構建輸出的目錄下 
cd dist

# 部屬到自定義域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/ShengHsiang/police-system.git master:gh-pages

cd -