const { MongoClient } = require("mongodb");
const { tree } = require('./common/util/func')
require("dotenv").config();
const {NODE_ENV, MONGO_DATABASE, MONGO_DB_USER, MONGO_DB_PASSWORD, MONGO_DB_HOST} = process.env
const uri = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}:27017/?poolSize=20&w=majority`

if(NODE_ENV !== 'development') process.exit(1);

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("연결성공");
        const db = await client.db(MONGO_DATABASE);
        const collections = await db.collections()
        collections.forEach(collection => {
            console.log('컬랙션 드랍')
            collection.drop()
        })

        const usersCollection = await db.collection('users')
        const users = [
            { name: "이수", age: 30 },
            { name: "김슈", age: 21 },
            { name: "최숸", age: 39 },
        ];
        usersCollection.insertMany(users)

    } finally {
        await client.close();
        console.log('연결종료')
    }
}
run().catch(console.dir);

