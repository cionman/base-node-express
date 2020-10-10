'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return EventPart.init(sequelize, DataTypes);
}

class EventPart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    partId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'PART_ID'
    },
    answerStatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ANSWER_STATUS'
    },
    answerContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'ANSWER_CONTENT'
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
    partStatus: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'PART_STATUS'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_EVENT_PART_TO_USER1",
      field: 'REG_ID'
    },
    eventId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_EVENT',
        key: 'EVENT_ID'
      },
      unique: "FK_EVENT_PART_TO_EVENT",
      field: 'EVENT_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_EVENT_PART_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_EVENT_PART'
    });
  return EventPart;
  }
}
