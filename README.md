## 디렉토리 구조
- controller : 컨트롤러
- model : 모델
- view : template 및 정적파일
- common : 공통 사용디렉토리
- 위 4개 디렉토리 이상 늘리지 않는 방향으로 작업

## 개발 서버 실행

- 노드 서버 구동 후 `gulp watch` 를 해야한다.

```
npm start
```

```
gulp watch
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

## 운영체제 서비스 등록하기

- `pm2 startup` 명령어 후 아래 `sudo..` 로 시작하는 명령어 결과를 시스템에 붙여넣기
```
pm2 startup

[PM2] Init System found: launchd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/Users/aaa/.nvm/versions/node/v12.13.0/bin /Users/aaa/.nvm/versions/node/v12.13.0/lib/node_modules/pm2/bin/pm2 startup launchd -u mac --hp /Users/aaa

```

## 로그 위치

```
cd ~/.pm2/logs
```
