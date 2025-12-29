# IoT Generator Control System

Стек для управления генераторами через MQTT (Mosquitto) и Node-RED.

## Требования
1. Установленный Docker и Docker Compose.
2. Существующая сеть Docker: `my_safe_192_network`.
3. Настроенный Nginx Reverse Proxy для проброса портов 8883 (MQTTS) и 443 (HTTPS).

## Развертывание
1. Склонируйте репозиторий.
2. Проверьте права на папки (Node-RED требует прав для записи):
   `chmod -R 777 nodered/data mosquitto/data mosquitto/log`
3. Запустите стек:
   ```bash
   docker compose up -d
