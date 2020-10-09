'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SharingLike.init(sequelize, DataTypes);
}

class SharingLike extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    sharingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_SHARING',
        key: 'SHARING_ID'
      },
      field: 'SHARING_ID'
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
    regDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    regIp: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'REG_IP'
    }
  }, {
    sequelize,
    tableName: 'TB_SHARING_LIKE'
    });
  return SharingLike;
  }
}
