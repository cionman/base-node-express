/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return FaqCate.init(sequelize, DataTypes);
}

class FaqCate extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    cateId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'CATE_ID'
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
    },
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'MENU_UID'
    },
    chgDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CHG_DT'
    },
    chgIp: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CHG_IP'
    },
    cateName: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'CATE_NAME'
    },
    orderSeq: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ORDER_SEQ'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_FAQ_CATE_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_FAQ_CATE_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_FAQ_CATE'
    });
  return FaqCate;
  }
}
