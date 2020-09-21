const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log(`Express 서버 구동 ${app.get("port")} 포트 리스닝 중 ...`);
});
