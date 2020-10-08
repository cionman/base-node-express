/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SharingSelectUser.init(sequelize, DataTypes);
}

class SharingSelectUser extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    sharingSelectUserId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'SHARING_SELECT_USER_ID'
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
    rating: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'RATING'
    },
    ratingDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'RATING_DATE'
    },
    reason: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'REASON'
    },
    selectDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'SELECT_DATE'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'STATUS'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SHARING_SELECT_USER_TO_USER1",
      field: 'REG_ID'
    },
    selectUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SHARING_SELECT_USER_TO_USER2",
      field: 'SELECT_USER_ID'
    },
    sharingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_SHARING',
        key: 'SHARING_ID'
      },
      unique: "FK_SHARING_SELECT_USER_TO_SHARING",
      field: 'SHARING_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_SHARING_SELECT_USER'
    });
  return SharingSelectUser;
  }
}
