'use strict'

const { init } = require('./app')
const { configs } = require('./common/config')
const env = configs.NODE_ENV
const port = configs.PORT

const main = async () => {
  const server = await init()
  server.listen(port, () => {
    console.log(`Express 서버 구동 ${port} 포트 리스닝 중 ...`)
  })

  process.on('SIGTERM', ()  => server.shutdown())
  process.on('SIGINT', ()  => server.shutdown())
}
main()
