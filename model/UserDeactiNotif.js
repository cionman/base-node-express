'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return UserDeactiNotif.init(sequelize, DataTypes);
}

class UserDeactiNotif extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    notifId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'NOTIF_ID'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    loginDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'LOGIN_DT'
    },
    reasonId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'REASON_ID'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'USER_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt: false,
    tableName: 'TB_USER_DEACTI_NOTIF'
    });
  return UserDeactiNotif;
  }
}
