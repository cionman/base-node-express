'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Lecture.init(sequelize, DataTypes);
}

class Lecture extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    lectureId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'LECTURE_ID'
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
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'END_DATE'
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'END_TIME'
    },
    externalSpace: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'EXTERNAL_SPACE'
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
    name: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'NAME'
    },
    personnel: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'PERSONNEL'
    },
    recruitStatus: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'RECRUIT_STATUS'
    },
    representImg: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'REPRESENT_IMG'
    },
    spaceType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'SPACE_TYPE'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'START_DATE'
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
    tag: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'TAG'
    },
    topYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'TOP_YN'
    },
    tuition: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'TUITION'
    },
    viewCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'VIEW_CNT'
    },
    weekday: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'WEEKDAY'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_LECTURE_TO_USER",
      field: 'REG_ID'
    },
    lectureGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'TB_LECTURE_GROUP',
        key: 'LECTURE_GROUP_ID'
      },
      unique: "FK_LECTURE_TO_LECTURE_GROUP",
      field: 'LECTURE_GROUP_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_LECTURE_TO_USER2",
      field: 'CHG_ID'
    },
    teacherId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_TEACHER',
        key: 'TEACHER_ID'
      },
      unique: "FK_LECTURE_TO_TEACHER",
      field: 'TEACHER_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_LECTURE'
    });
  return Lecture;
  }
}
