'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return ErrorLog.init(sequelize, DataTypes);
};

class ErrorLog extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            errorLogId: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                field: 'ERROR_LOG_ID'
            },
            createdDate: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'REG_DT'
            },
            errorDetail: {
                type: "LONGTEXT",
                allowNull: true,
                field: 'ERROR_DETAIL'
            },
            errorTitle: {
                type: "LONGTEXT",
                allowNull: true,
                field: 'ERROR_TITLE'
            }
        }, {
            sequelize,
            createdAt: "createdDate",
            updatedAt: false,
            tableName: 'TB_ERROR_LOG'
        });
        return ErrorLog;
    }
}
