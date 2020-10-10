'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Term.init(sequelize, DataTypes);
}

class Term extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    termId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'TERM_ID'
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
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'REG_IP'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CHG_DT'
    },
    modifiedIp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'CHG_IP'
    },
    nowYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'NOW_YN'
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
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TERM_TO_USER1",
      field: 'REG_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TERM_TO_USER2",
      field: 'CHG_ID'
    },
    termCtgryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_TERM_CTGRY',
        key: 'TERM_CTGRY_ID'
      },
      unique: "FK_TERM_TO_TERM_CATEGORY",
      field: 'TERM_CTGRY_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_TERM'
    });
  return Term;
  }
}
