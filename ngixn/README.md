server
{
    listen 80;
    listen 443 ssl http2;
    server_name www.xiaozhi.shop;
    #index index.html index.htm default.htm default.html;
    #root /home/xiaozhi/;

    #SSL-START SSL相关配置
    #error_page 404/404.html;
    ssl_certificate         /etc/nginx/cert/xiaozhi.shop.crt;
    ssl_certificate_key    /etc/nginx/cert/xiaozhi.shop.key;  #证书私钥;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;
    #SSL-END

   

  location / {
        proxy_pass http://127.0.0.1:8082;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;
        proxy_set_header X-Host $host:$server_port;
        proxy_set_header X-Scheme $scheme;
        proxy_connect_timeout 30s;
        proxy_read_timeout 86400s;
        proxy_send_timeout 30s;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    # HTTP反向代理相关配置结束 <<<

   #access_log  /www/wwwlogs/xiaozhi.log;
   #error_log  /www/wwwlogs/xiaozhi.error.log;

}