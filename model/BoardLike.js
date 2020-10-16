'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return BoardLike.init(sequelize, DataTypes);
};

class BoardLike extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            boardId: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'TB_BOARD',
                    key: 'BOARD_ID'
                },
                field: 'BOARD_ID'
            },
            userId: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'TB_USER',
                    key: 'USER_ID'
                },
                field: 'USER_ID'
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
            }
        }, {
            sequelize,
            createdAt: "createdDate",
            updatedAt: false,
            tableName: 'TB_BOARD_LIKE'
        });
        return BoardLike;
    }
}
