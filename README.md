## 디렉토리 구조
- controller : 컨트롤러
- model : 모델
- view : template 및 정적파일
- common : 공통 사용디렉토리
- 위 4개 디렉토리 이상 늘리지 않는 방향으로 작업

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

- `pm2.config.js` 에 설정정보가 기재됨.
- 추가 정보 : [https://blog.rhostem.com/posts/2018-05-27-pm2-deploy](https://blog.rhostem.com/posts/2018-05-27-pm2-deploy)

```
pm2 start pm2.config.js
```

## 로그 위치

```
cd ~/.pm2/logs
```
