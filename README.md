## 디렉토리 구조
- controller : 컨트롤러
- model : SQL 모델
- schema : mongodb 스키마
- view : template 및 정적파일
- common : 공통 사용디렉토리
- 위 5개 디렉토리 이상 늘리지 않는 방향으로 작업

## 개발 서버 실행

- 노드 서버 구동 후 `gulp watch` 를 해야한다.

```
npm start
```

- 프론트 빌드 

```
gulp watch
```

## 개발서버 데이터 초기화

- NODE_ENV=development 일 때만 동작한다.

- mysql 데이터 초기화

```
node data_refresh_sql.js
```

- mongodb 데이터 초기화

```
node data_refresh_nosql.js
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

## 기존 데이터베이스에서 모델 import

```
npm install -g sequelize-auto
npm install -g mysql2

sequelize-auto -o "./model" --cm p --cp c --cf p  -d base -h localhost -u root -p 3306 -e mysql -l es6
```

## 보안 관련 유용한 article

- [https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)

## 도입 검토 모듈

- [express-permission](https://www.npmjs.com/package/express-permission) : 권한 관리 
- [acl](https://www.npmjs.com/package/acl) : 권한 관리 
- [express-ipfilter](https://www.npmjs.com/package/express-ipfilter) : IP 필터 관리자 페이지용
- [express-validator](https://express-validator.github.io/docs/) : form-validation  
- [toobusy-js](https://www.npmjs.com/package/toobusy-js) : Dos 공격 방어용
- [express-bouncer](https://www.npmjs.com/package/express-bouncer) : 로그인 무차별 대입 공격 방어용
- [express-brute](https://www.npmjs.com/package/express-brute) : 로그인 무차별 대입 공격 방어용
- [hpp](https://www.npmjs.com/package/hpp) : 로그인 무차별 대입 공격 방어용


#Mac에서 mongodb 인증 모드가 잘 구동이 되지 않을때

- `/usr/local/etc/mongod.conf` 에 있는 내용의 띄어쓰기가 잘못되어있는 경우가 있다. yml형식에 맞추어야한다.(콜론 문자 다음에 한칸띄우기)
- conf 파일에 오류가 있는 상태에서는 비인증 모드에서는 정상구동이 된다.
- 오류 확인은 `/usr/local/opt/mongodb-community@4.4/bin/mongod --config=/usr/local/etc/mongod.conf` 이렇게 직접실행해보면 오류확인이 가능하다.

# mongodb transaction 테스트 관련

- 현재 mongodb transaction은 replica 환경에서만 작동된다.
- 로컬 환경에서 run-rs 패키지를 활용한 테스트 환경 구축이 가능하지만 알수 없는 오류로 동작하지 않는다.
- [http://thecodebarbarian.com/introducing-run-rs-zero-config-mongodb-runner](http://thecodebarbarian.com/introducing-run-rs-zero-config-mongodb-runner)
- [https://stackoverflow.com/questions/51461952/mongodb-v4-0-transaction-mongoerror-transaction-numbers-are-only-allowed-on-a/51462024](https://stackoverflow.com/questions/51461952/mongodb-v4-0-transaction-mongoerror-transaction-numbers-are-only-allowed-on-a/51462024)
        

# 임시 메모
