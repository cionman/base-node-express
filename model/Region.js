'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Region.init(sequelize, DataTypes);
}

class Region extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    regionId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'REGION_ID'
    },
    regionGroup: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'REGION_GROUP'
    },
    regionName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'REGION_NAME'
    }
  }, {
    sequelize,
    tableName: 'TB_REGION'
    });
  return Region;
  }
}
