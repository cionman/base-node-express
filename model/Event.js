'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Event.init(sequelize, DataTypes);
}

class Event extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    eventId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'EVENT_ID'
    },
    commentCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'COMMENT_CNT'
    },
    eventContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'EVENT_CONTENT'
    },
    regDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    regIp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'REG_IP'
    },
    eventEnd: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'EVENT_END'
    },
    eventImage: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'EVENT_IMAGE'
    },
    likeCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'LIKE_CNT'
    },
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'MENU_UID'
    },
    chgDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CHG_DT'
    },
    chgIp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'CHG_IP'
    },
    partCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'PART_CNT'
    },
    eventStart: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'EVENT_START'
    },
    eventStatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'EVENT_STATUS'
    },
    eventTitle: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'EVENT_TITLE'
    },
    eventType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'EVENT_TYPE'
    },
    viewCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'VIEW_CNT'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_EVENT_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_EVENT_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_EVENT'
    });
  return Event;
  }
}
