#!/usr/bin/env bash
# Обновление сайта на сервере (вызывается из GitHub Actions после пуша в main).
set -euo pipefail
cd /var/www/unibp
git fetch origin main
git reset --hard origin/main
npm ci
npm run build
pm2 reload unibp --update-env
