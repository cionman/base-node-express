'use strict';

module.exports = {
    apps: [
        {
            name: "base-node-express", // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
            script: "./server.js", // pm2로 실행될 파일 경로
            watch: true, // 파일이 변경되면 자동으로 재실행 (true || false)
            env: {
                "NODE_ENV": "production",
                "PORT": 5001,
            },
        }
    ]
};
