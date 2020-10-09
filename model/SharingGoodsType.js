'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SharingGoodsType.init(sequelize, DataTypes);
}

class SharingGoodsType extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    sharingGoodsTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'SHARING_GOODS_TYPE_ID'
    },
    typeName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TYPE_NAME'
    }
  }, {
    sequelize,
    tableName: 'TB_SHARING_GOODS_TYPE'
    });
  return SharingGoodsType;
  }
}
