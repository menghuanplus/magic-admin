# admin

# 增加 hosts
```
sudo echo "127.0.0.1 fe.your.com" >> /etc/hosts
```

# nginx config
```
# 8080 替换为你的端口
server{
    listen 80;
    server_name fe.your.com;

    location / {
        proxy_pass                  http://127.0.0.1:8080;
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header Host       $http_host;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
        client_max_body_size        200M;
        proxy_http_version          1.1;
        proxy_set_header   Connection      "upgrade";
        try_files $uri $uri/ /index.html =404;
    }
}
```

# env
```
# cp 然后修改配置
cp .env.development.example .env.development
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and hot-reloads for test
```
npm run test
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
