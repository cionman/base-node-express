'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { configs } = require('../common/config');
const env = configs.NODE_ENV || 'development';
const cls = require('cls-hooked');
const namespace = cls.createNamespace('base-node-express');
Sequelize.useCLS(namespace);

const db = {};
let sequelize = new Sequelize(configs.DATABASE, configs.DB_USER, configs.DB_PASSWORD, {
    host: configs.DB_HOST,
    dialect: 'mysql',
    timezone: '+09:00', //한국 시간 셋팅,
    retry: {
        match: [
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/
        ],
        max: 5000
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
