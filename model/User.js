/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return User.init(sequelize, DataTypes);
}

class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    userId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'USER_ID'
    },
    address1: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'ADDRESS1'
    },
    address2: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'ADDRESS2'
    },
    birthday: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'BIRTHDAY'
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
    email: {
      type: DataTypes.STRING(300),
      allowNull: true,
      unique: "UQ_USER__EMAIL",
      field: 'EMAIL'
    },
    facebookCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ_USER__FACEBOOK_CODE",
      field: 'FACEBOOK_CODE'
    },
    githubCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ_USER__GITHUB_CODE",
      field: 'GITHUB_CODE'
    },
    googleCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ_USER__GOOGLE_CODE",
      field: 'GOOGLE_CODE'
    },
    userImage: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'USER_IMAGE'
    },
    kakaoCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ_USER__KAKAO_CODE",
      field: 'KAKAO_CODE'
    },
    loginDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'LOGIN_DT'
    },
    loginId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ_USER__LOGIN_ID",
      field: 'LOGIN_ID'
    },
    chgDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CHG_DT'
    },
    userName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'USER_NAME'
    },
    naverCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ_USER__NAVER_CODE",
      field: 'NAVER_CODE'
    },
    userNick: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ_USER__USER_NICK",
      field: 'USER_NICK'
    },
    passwd: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'PASSWD'
    },
    passwdChgDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'PASSWD_CHG_DT'
    },
    passwdFailCnt: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'PASSWD_FAIL_CNT'
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'PHONE'
    },
    postCode: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'POST_CODE'
    },
    userStatus: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: 'USER_STATUS'
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER_ROLE',
        key: 'ROLE_ID'
      },
      unique: "FK_USER_TO_USER_ROLE",
      field: 'ROLE_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_USER'
    });
  return User;
  }
}