'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Teacher.init(sequelize, DataTypes);
}

class Teacher extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    teacherId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'TEACHER_ID'
    },
    belong: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'BELONG'
    },
    blog: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'BLOG'
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
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'EMAIL'
    },
    facebook: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'FACEBOOK'
    },
    teacherFee: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'TEACHER_FEE'
    },
    instagram: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'INSTAGRAM'
    },
    introduction: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'INTRODUCTION'
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
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'CHG_IP'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'NAME'
    },
    phoneNo: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'PHONE_NO'
    },
    photo: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'PHOTO'
    },
    representLecture: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_LECTURE'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    youtube: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'YOUTUBE'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TEACHER_TO_USER",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_TEACHER_TO_USER2",
      field: 'CHG_ID'
    },
    planFileId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_ATTACHED_FILE',
        key: 'ATTACHED_FILE_ID'
      },
      unique: "FK_TEACHER_TO_ATTACH_FILE2",
      field: 'PLAN_FILE_ID'
    },
    resumeFileId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_ATTACHED_FILE',
        key: 'ATTACHED_FILE_ID'
      },
      unique: "FK_TEACHER_TO_ATTACH_FILE1",
      field: 'RESUME_FILE_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_TEACHER'
    });
  return Teacher;
  }
}
