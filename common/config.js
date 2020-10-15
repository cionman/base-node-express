const path = require('path')

if (process.env.NODE_ENV === 'test') {
    require("dotenv").config({ path: path.join(__dirname, '../.env.test') })
}else{
    require("dotenv").config()
}

const checkEnv = (key, defaultValue) => {
    const value = process.env[key]
    if (value == undefined) {
        if (defaultValue !== undefined) {
            return defaultValue
        }
        throw new Error(`process.env.${key}에 적절한 값을 설정하지 않았습니다`)
    }else{
        return value
    }
}

exports.configs = {
    COOKIE_SECRET : checkEnv("COOKIE_SECRET"),
    DATABASE : checkEnv("DATABASE"),
    DB_USER : checkEnv("DB_USER"),
    DB_PASSWORD : checkEnv("DB_PASSWORD"),
    DB_HOST : checkEnv("DB_HOST"),
    SHUTDOWN_TIME_OUT : checkEnv("SHUTDOWN_TIME_OUT"),
    PORT : checkEnv("PORT"),
    KEY : checkEnv("KEY"),
    IV : checkEnv("IV"),
    MONGO_DATABASE : checkEnv("MONGO_DATABASE"),
    MONGO_DB_USER : checkEnv("MONGO_DB_USER"),
    MONGO_DB_PASSWORD : checkEnv("MONGO_DB_PASSWORD"),
    MONGO_DB_HOST : checkEnv("MONGO_DB_HOST"),
    KAKAO_ID : checkEnv("KAKAO_ID"),
    NODE_ENV : checkEnv("NODE_ENV", "development"),
}