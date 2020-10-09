'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return History.init(sequelize, DataTypes);
}

class History extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'MENU_UID'
    },
    historyContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'HISTORY_CONTENT'
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
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_HISTORY_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_HISTORY_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_HISTORY'
    });
  return History;
  }
}
