'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return QnaBigCate.init(sequelize, DataTypes);
}

class QnaBigCate extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    qnaBigCateId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'QNA_BIG_CATE_ID'
    },
    cateOrder: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'CATE_ORDER'
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
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'MENU_UID'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CHG_DT'
    },
    modifiedIp: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CHG_IP'
    },
    cateName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CATE_NAME'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_QNA_BIGCATE_TO_USER1",
      field: 'REG_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_QNA_BIGCATE_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_QNA_BIG_CATE'
    });
  return QnaBigCate;
  }
}
