'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ChatMessage.init(sequelize, DataTypes);
}

class ChatMessage extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    chatMessageId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'CHAT_MESSAGE_ID'
    },
    message: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'MESSAGE'
    },
    messageType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'MESSAGE_TYPE'
    },
    chatRoomId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'TB_CHAT_ROOM',
        key: 'CHAT_ROOM_ID'
      },
      unique: "FK_CHAT_MESSAGE_TO_CHAT_ROOM",
      field: 'CHAT_ROOM_ID'
    },
    sender: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CHAT_MESSAGE_TO_USER",
      field: 'SENDER'
    }
  }, {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'TB_CHAT_MESSAGE'
    });
  return ChatMessage;
  }
}
