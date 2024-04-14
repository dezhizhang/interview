
### weight 权重
 
upstream httpds {
    server http://127.0.0.1:8082 weight=8 down;
    server http://127.0.0.1:8083 weight=8;
}

server
{
    listen 80;
    listen 443 ssl http2;
    server_name www.xiaozhi.shop;
    #index index.html index.htm default.htm default.html;
    #root /home/xiaozhi/;

   

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