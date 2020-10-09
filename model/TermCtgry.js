'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return TermCtgry.init(sequelize, DataTypes);
}

class TermCtgry extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    termCtgryId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'TERM_CTGRY_ID'
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
    displayMethod: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'DISPLAY_METHOD'
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
    requiredYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'REQUIRED_YN'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    termCtgryOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'TERM_CTGRY_ORDER'
    },
    title: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'TITLE'
    },
    userRequiredYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'USER_REQUIRED_YN'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TERM_CTGRY_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TERM_CTGRY_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_TERM_CTGRY'
    });
  return TermCtgry;
  }
}
