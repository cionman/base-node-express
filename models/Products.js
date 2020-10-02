'use strict';
const { Model } = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        static associate(models) {
            // define association here
        }
        dateFormat (date){
            return moment(date).format('YYYY-MM-DD');
        }
    };
    Products.init({
            id: { type: DataTypes.BIGINT(20), primaryKey: true, autoIncrement: true, field: 'ID'},
            name : { type: DataTypes.STRING(200), defaultValue : '', field: 'NAME'},
            price : { type: DataTypes.INTEGER, allowNull: false, field: 'PRICE'},
            description : { type: DataTypes.TEXT('long'), field: 'DESCRIPTION' },
            createdDate : {type: DataTypes.DATE, field: 'REG_DT'},
            updatedDate : {type: DataTypes.DATE, field: 'CHG_DT'},
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Products',
            tableName: 'TB_PRODUCTS',
            indexes: [{ unique: false, fields: ['name'] }],
            createdAt:"createdDate",
            updatedAt:"updatedDate",
        });
    return Products;
};
