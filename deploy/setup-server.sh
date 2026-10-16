#!/usr/bin/env bash
# Одноразовая настройка VPS под проект unibp.cc (Ubuntu/Debian).
# Не трогает другие проекты на сервере: своя папка, свой порт, свой nginx-конфиг, свой процесс pm2.
# Запуск на сервере:  bash setup-server.sh
set -euo pipefail

DOMAIN="unibp.cc"
APP_DIR="/var/www/unibp"
PORT="3010"
REPO="https://github.com/macmpaxep/investing-acd.git"
BRANCH="main"

echo "==> Пакеты"
apt-get update -y
apt-get install -y nginx git curl ca-certificates certbot python3-certbot-nginx

if ! command -v node >/dev/null || [ "$(node -v | sed 's/v\([0-9]*\).*/\1/')" -lt 20 ]; then
  echo "==> Node.js 22"
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi
command -v pm2 >/dev/null || npm install -g pm2

echo "==> Код проекта"
mkdir -p "$APP_DIR"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" fetch origin "$BRANCH" && git -C "$APP_DIR" reset --hard "origin/$BRANCH"
else
  git clone --branch "$BRANCH" "$REPO" "$APP_DIR" || {
    echo
    echo "Не удалось клонировать (репозиторий приватный?). Создайте deploy-ключ:"
    echo "  ssh-keygen -t ed25519 -f ~/.ssh/unibp_deploy -N ''"
    echo "  cat ~/.ssh/unibp_deploy.pub   # добавить в GitHub: Repo -> Settings -> Deploy keys"
    echo "  и клонируйте через git@github.com:macmpaxep/investing-acd.git"
    exit 1
  }
fi

echo "==> Переменные окружения"
if [ ! -f "$APP_DIR/.env.local" ]; then
  read -rp "TELEGRAM_BOT_TOKEN: " TG_TOKEN
  read -rp "TELEGRAM_CHAT_ID: " TG_CHAT
  umask 077
  printf 'TELEGRAM_BOT_TOKEN=%s\nTELEGRAM_CHAT_ID=%s\n' "$TG_TOKEN" "$TG_CHAT" > "$APP_DIR/.env.local"
fi

echo "==> Сборка и запуск"
cd "$APP_DIR"
npm ci
npm run build
PORT="$PORT" pm2 start npm --name unibp -- start || PORT="$PORT" pm2 restart unibp --update-env
pm2 save
pm2 startup systemd -u "$(whoami)" --hp "$HOME" >/dev/null 2>&1 || true

echo "==> nginx для $DOMAIN"
cat > /etc/nginx/sites-available/unibp <<NGINX
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    client_max_body_size 5m;

    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
NGINX
ln -sf /etc/nginx/sites-available/unibp /etc/nginx/sites-enabled/unibp
nginx -t && systemctl reload nginx

echo "==> SSL (DNS $DOMAIN должен уже указывать на этот сервер)"
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --register-unsafely-without-email --redirect || \
  echo "SSL не выпущен: проверьте DNS и повторите: certbot --nginx -d $DOMAIN -d www.$DOMAIN"

echo "Готово: https://$DOMAIN"
