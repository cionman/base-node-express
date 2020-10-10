'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Space.init(sequelize, DataTypes);
}

class Space extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    spaceId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'SPACE_ID'
    },
    approvalDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'APPROVAL_DATE'
    },
    attendance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ATTENDANCE'
    },
    cancelDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CANCEL_DATE'
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
    email: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'EMAIL'
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'END_TIME'
    },
    meetingContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'MEETING_CONTENT'
    },
    meetingDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'MEETING_DATE'
    },
    meetingName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'MEETING_NAME'
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
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'CHG_IP'
    },
    phoneNo: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'PHONE_NO'
    },
    spaceType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SPACE_TYPE'
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'START_TIME'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    userName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'USER_NAME'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SPACE_TO_USER",
      field: 'REG_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SPACE_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_SPACE'
    });
  return Space;
  }
}
