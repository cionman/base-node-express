'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SharingExperienceType.init(sequelize, DataTypes);
}

class SharingExperienceType extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    sharingExperienceTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'SHARING_EXPERIENCE_TYPE_ID'
    },
    typeName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TYPE_NAME'
    }
  }, {
    sequelize,
    tableName: 'TB_SHARING_EXPERIENCE_TYPE'
    });
  return SharingExperienceType;
  }
}
