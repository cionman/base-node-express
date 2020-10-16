const { MongoClient } = require("mongodb");
const { tree } = require('./common/util/func');
const { encryptAES256 } = require('./common/util/crypto.util');
const path = require('path');
const { configs } = require('./common/config');
const { NODE_ENV, MONGO_DATABASE, MONGO_DB_USER, MONGO_DB_PASSWORD, MONGO_DB_HOST } = configs;
const uri = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}:27017/?poolSize=20&w=majority`;

if (NODE_ENV !== 'development' && NODE_ENV !== 'test') process.exit(1);

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("연결성공");
        const db = await client.db(MONGO_DATABASE);
        const collections = await db.collections();
        collections.forEach(collection => {
            console.log('컬랙션 드랍');
            collection.drop();
        });

        const usersCollection = await db.collection('users');
        const users = [
            { name: encryptAES256("이수"), age: 30, married: false, phone: encryptAES256("00011112222") },
            { name: encryptAES256("김슈"), age: 21, married: true, phone: encryptAES256("00022222222") },
            { name: encryptAES256("최숸"), age: 39, married: false, phone: encryptAES256("00033332222") },
        ];
        usersCollection.insertMany(users);

    } finally {
        await client.close();
        console.log('연결종료');
    }
}

run().catch(console.dir);

