'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return TagRelation.init(sequelize, DataTypes);
};

class TagRelation extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            objectId: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                field: 'OBJECT_ID'
            },
            tagId: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'TB_TAG',
                    key: 'TAG_ID'
                },
                field: 'TAG_ID'
            },
            tagType: {
                type: DataTypes.STRING(50),
                allowNull: false,
                primaryKey: true,
                field: 'TAG_TYPE'
            }
        }, {
            sequelize,
            createdAt: false,
            updatedAt: false,
            tableName: 'TB_TAG_RELATION'
        });
        return TagRelation;
    }
}
