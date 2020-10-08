/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return UserRole.init(sequelize, DataTypes);
}

class UserRole extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    roleId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ROLE_ID'
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
    roleName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'ROLE_NAME'
    },
    roleGroup: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'ROLE_GROUP'
    },
    /*
    // 임시 주석 : Cyclic dependency found. TB_USER is dependent of itself.
    // Dependency chain: TB_ATTACHED_FILE -> TB_USER -> TB_USER_ROLE => TB_USER
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_USER_ROLE_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_USER_ROLE_TO_USER2",
      field: 'CHG_ID'
    }*/
  }, {
    sequelize,
    tableName: 'TB_USER_ROLE'
    });
  return UserRole;
  }
}
