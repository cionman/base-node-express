'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return UserLoginLog.init(sequelize, DataTypes);
}

class UserLoginLog extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    loginLogId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'LOGIN_LOG_ID'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    createdIp: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'REG_IP'
    },
    loginLogType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'LOGIN_LOG_TYPE'
    },
    loginId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'LOGIN_ID'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'USER_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    tableName: 'TB_USER_LOGIN_LOG'
    });
  return UserLoginLog;
  }
}
