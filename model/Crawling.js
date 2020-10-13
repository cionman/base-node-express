'use strict';
const { Model } = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    class Crawling extends Model {
        static associate(models) {
            // define association here
        }
    };
    Crawling.init({
            url : { type: DataTypes.STRING(300), primaryKey: true, field: 'URL'},
            content : { type: DataTypes.TEXT('long'), field: 'CONTENT' },
            createdDate : {type: DataTypes.DATE, field: 'REG_DT'},
            modifiedDate : {type: DataTypes.DATE, field: 'CHG_DT'},
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Crawling',
            tableName: 'TB_CRAWLING',
            createdAt:"createdDate",
            updatedAt:"modifiedDate",
        });
    return Crawling;
};
