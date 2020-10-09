'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Tag.init(sequelize, DataTypes);
}

class Tag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    tagId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'TAG_ID'
    },
    tagName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'TAG_NAME'
    }
  }, {
    sequelize,
    tableName: 'TB_TAG'
    });
  return Tag;
  }
}
