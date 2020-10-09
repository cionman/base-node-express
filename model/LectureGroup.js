'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return LectureGroup.init(sequelize, DataTypes);
}

class LectureGroup extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    lectureGroupId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'LECTURE_GROUP_ID'
    },
    lectureGroupName: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'LECTURE_GROUP_NAME'
    },
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'MENU_UID'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'TB_LECTURE_GROUP'
    });
  return LectureGroup;
  }
}
