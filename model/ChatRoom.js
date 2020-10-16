'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return ChatRoom.init(sequelize, DataTypes);
};

class ChatRoom extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            chatRoomId: {
                type: DataTypes.STRING(255),
                allowNull: false,
                primaryKey: true,
                field: 'CHAT_ROOM_ID'
            },
            name: {
                type: DataTypes.STRING(500),
                allowNull: true,
                field: 'NAME'
            },
            userCount: {
                type: DataTypes.BIGINT,
                allowNull: true,
                field: 'USER_COUNT'
            }
        }, {
            sequelize,
            createdAt: false,
            updatedAt: false,
            tableName: 'TB_CHAT_ROOM'
        });
        return ChatRoom;
    }
}
