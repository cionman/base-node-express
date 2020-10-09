'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return QnaSmallCate.init(sequelize, DataTypes);
}

class QnaSmallCate extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    qnaSmallCateId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'QNA_SMALL_CATE_ID'
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
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CATE_NAME'
    },
    qnaBigCateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_QNA_BIG_CATE',
        key: 'QNA_BIG_CATE_ID'
      },
      unique: "FK_QNA_SMALLCATE_TO_BIGCATE",
      field: 'QNA_BIG_CATE_ID'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_QNA_SMALLCATE_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_QNA_SMALLCATE_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_QNA_SMALL_CATE'
    });
  return QnaSmallCate;
  }
}
