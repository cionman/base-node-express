'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return AttachedFile.init(sequelize, DataTypes);
}

class AttachedFile extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    attachedFileId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ATTACHED_FILE_ID'
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
    fileName: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'FILE_NAME'
    },
    fileSize: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'FILE_SIZE'
    },
    fileUrl: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'FILE_URL'
    },
    fileUuid: {
      type: DataTypes.CHAR(32),
      allowNull: true,
      unique: "UQ_ATTACHED_FILE__FILE_UUID",
      field: 'FILE_UUID'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ATTACHEDFILE_TO_USER",
      field: 'REG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_ATTACHED_FILE'
    });
  return AttachedFile;
  }
}
