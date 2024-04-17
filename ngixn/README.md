# nginx

### 查看开放的端口

```bash
firewall-cmd --list-all
```
### 开放防火墙端口

```bash
sudo firewall-cmd --add-port=8082/tcp --permanent
```
