const mysql = require('mysql2');
const fs = require('fs');
const { configs } = require('./common/config');

if (configs.NODE_ENV !== 'development' && NODE_ENV !== 'test') process.exit(1);

const dropSql = fs.readFileSync('./model/sql/mysql_drop.sql', { encoding: 'utf8' });
const ddlSql = fs.readFileSync('./model/sql/mysql_ddl.sql', { encoding: 'utf8' });
const dataSql = fs.readFileSync('./model/sql/mysql_data.sql', { encoding: 'utf8' });

const connection = mysql.createConnection({
    host: configs.DB_HOST,
    user: configs.DB_USER,
    password: configs.DB_PASSWORD,
    database: configs.DATABASE,
    multipleStatements: true
});

connection.connect();
console.log('--- DB 연결 시작 ---');
const sql = dropSql + ddlSql + dataSql;

connection.query(sql, (err, result, fields) => {
    if (err) {
        console.log(err);
        connection.end();
        process.exit(1);
    }
    console.log('--- 데이터 초기화 성공 ---');
    connection.end();
    console.log('--- DB 연결 종료 ---');
    process.exit(0);
});



