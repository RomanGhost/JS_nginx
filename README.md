# Пример использования NGinx
Для загрузки страницы с устройства используется NGinx, который выдает первую страницу, если перейти по адресу 'localhost:7890/' - прописывается в [конфигурации](/nginx/nginx.conf#L8)

+ Для удобства настройки и запуска проект запускается в контейнере. Используется базовый образ [nginx:alpine](https://hub.docker.com/_/nginx)
+ Для удобства используется порт [7890](/docker-compose.yml#L6) и проксирует трафик на 80 порт
+ Дальше указывются какие папки куда сохраняются в [контейнере](/docker-compose.yml#L8-L9)

Запуск проекта: 
``` sh
docker-compose up -d --build
```


- [Инструкция](https://nginx.org/ru/docs/beginners_guide.html) по настройке NGinx
- [Инструкция](https://habr.com/ru/companies/ruvds/articles/450312/) по docker-compose
