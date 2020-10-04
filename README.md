## 개발 서버 실행

```
npm start
```

## 운영서버 설치
```
npm install
npm install -g pm2
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 100M
pm2 set pm2-logrotate:retain 180
```

## 운영서버 실행

- `ecosystem.config.js` 에 설정정보가 기재됨.
- 추가 정보 : [https://blog.rhostem.com/posts/2018-05-27-pm2-deploy](https://blog.rhostem.com/posts/2018-05-27-pm2-deploy)

```
pm2 start ecosystem.config.js
```
