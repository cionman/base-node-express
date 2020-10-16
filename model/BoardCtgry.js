'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return BoardCtgry.init(sequelize, DataTypes);
};

class BoardCtgry extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            boardCtgryId: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                field: 'BOARD_CTGRY_ID'
            },
            createdDate: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'REG_DT'
            },
            createdIp: {
                type: DataTypes.STRING(15),
                allowNull: true,
                field: 'REG_IP'
            },
            menuUid: {
                type: DataTypes.STRING(50),
                allowNull: true,
                field: 'MENU_UID'
            },
            modifiedDate: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'CHG_DT'
            },
            modifiedIp: {
                type: DataTypes.STRING(15),
                allowNull: true,
                field: 'CHG_IP'
            },
            name: {
                type: DataTypes.STRING(300),
                allowNull: true,
                field: 'NAME'
            },
            status: {
                type: DataTypes.STRING(10),
                allowNull: true,
                field: 'STATUS'
            },
            createdBy: {
                type: DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'TB_USER',
                    key: 'USER_ID'
                },
                unique: "FK_BOARD_CTGRY_TO_USER1",
                field: 'REG_ID'
            },
            modifiedBy: {
                type: DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'TB_USER',
                    key: 'USER_ID'
                },
                unique: "FK_BOARD_CTGRY_TO_USER2",
                field: 'CHG_ID'
            }
        }, {
            sequelize,
            createdAt: "createdDate",
            updatedAt: "modifiedDate",
            tableName: 'TB_BOARD_CTGRY'
        });
        return BoardCtgry;
    }
}
