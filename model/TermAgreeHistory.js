'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return TermAgreeHistory.init(sequelize, DataTypes);
}

class TermAgreeHistory extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    termAgreeHistoryId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'TERM_AGREE_HISTORY_ID'
    },
    agree: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'AGREE'
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
    termId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_TERM',
        key: 'TERM_ID'
      },
      unique: "FK_TERM_AGREE_HISTORY_TO_TERM",
      field: 'TERM_ID'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TERM_AGREE_HISTORY_TO_USER3",
      field: 'USER_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    tableName: 'TB_TERM_AGREE_HISTORY'
    });
  return TermAgreeHistory;
  }
}
