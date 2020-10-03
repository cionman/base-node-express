'use strict'

const { init } = require('./app')
const { getConfig } =require('./config/config')
const env = process.env.NODE_ENV

const main = async () => {
  const config = await getConfig()
  const server = await init(config)
  server.listen(server.app.get("port"), () => {
    console.log(`Express 서버 구동 ${server.app.get("port")} 포트 리스닝 중 ...`)
  })

  process.on('SIGTERM', ()  => server.shutdown())
  process.on('SIGINT', ()  => server.shutdown())
}
main()
