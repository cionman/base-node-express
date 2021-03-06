'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return UserDestroy.init(sequelize, DataTypes);
};

class UserDestroy extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            userId: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                field: 'USER_ID'
            },
            createdDate: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'REG_DT'
            },
            destroyType: {
                type: DataTypes.CHAR(1),
                allowNull: true,
                field: 'DESTROY_TYPE'
            }
        }, {
            sequelize,
            createdAt: "createdDate",
            updatedAt: false,
            tableName: 'TB_USER_DESTROY'
        });
        return UserDestroy;
    }
}
