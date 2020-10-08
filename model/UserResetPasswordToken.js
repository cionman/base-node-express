/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return UserResetPasswordToken.init(sequelize, DataTypes);
}

class UserResetPasswordToken extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    userResetPasswordTokenId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'USER_RESET_PASSWORD_TOKEN_ID'
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
    token: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: "UQ_USER_RESET_PASSWORD_TOKEN__TOKEN",
      field: 'TOKEN'
    },
    targetUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_USER_RESET_PASSWORD_TOKEN_TO_USER",
      field: 'TARGET_USER_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_USER_RESET_PASSWORD_TOKEN'
    });
  return UserResetPasswordToken;
  }
}
