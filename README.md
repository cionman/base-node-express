## 개발 서버 실행

```
npm start
```

## 운영서버 실행

- `ecosystem.config.js` 에 설정정보가 기재됨.
- 추가 정보 : [https://blog.rhostem.com/posts/2018-05-27-pm2-deploy](https://blog.rhostem.com/posts/2018-05-27-pm2-deploy)

```
pm2 start ecosystem.config.js
```
