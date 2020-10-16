const mongoose = require('mongoose');
const { configs } = require('../common/config');
const { NODE_ENV, MONGO_DATABASE, MONGO_DB_USER, MONGO_DB_PASSWORD, MONGO_DB_HOST } = configs;

const connect = () => {
    if (NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    mongoose.connect(`mongodb://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}:27017/admin`, {
        dbName: MONGO_DATABASE,
        useNewUrlParser: true,
        useCreateIndex: true,
    }, (error) => {
        if (error) {
            console.log('몽고디비 연결 에러', error);
        } else {
            console.log('몽고디비 연결 성공');
        }
    });
};

mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
});

module.exports = connect;
