'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return TermAgree.init(sequelize, DataTypes);
}

class TermAgree extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    termId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_TERM',
        key: 'TERM_ID'
      },
      field: 'TERM_ID'
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
    agree: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'AGREE'
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
      unique: "FK_TERM_AGREE_TO_USER2",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TERM_AGREE_TO_USER3",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_TERM_AGREE'
    });
  return TermAgree;
  }
}
