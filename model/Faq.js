'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Faq.init(sequelize, DataTypes);
}

class Faq extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    faqId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'FAQ_ID'
    },
    content: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CONTENT'
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
    orderSeq: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ORDER_SEQ'
    },
    publishDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'PUBLISH_DT'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'TITLE'
    },
    cateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_FAQ_CATE',
        key: 'CATE_ID'
      },
      unique: "FK_FAQ_TO_FAQ_CATE",
      field: 'CATE_ID'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_FAQ_TO_USER1",
      field: 'REG_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_FAQ_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_FAQ'
    });
  return Faq;
  }
}
