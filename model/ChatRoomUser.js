'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return ChatRoomUser.init(sequelize, DataTypes);
};

class ChatRoomUser extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            chatRoomId: {
                type: DataTypes.STRING(255),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'TB_CHAT_ROOM',
                    key: 'CHAT_ROOM_ID'
                },
                field: 'CHAT_ROOM_ID'
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
            sessionId: {
                type: DataTypes.STRING(100),
                allowNull: true,
                field: 'SESSION_ID'
            }
        }, {
            sequelize,
            createdAt: false,
            updatedAt: false,
            tableName: 'TB_CHAT_ROOM_USER'
        });
        return ChatRoomUser;
    }
}
