'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SharingReportType.init(sequelize, DataTypes);
}

class SharingReportType extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    sharingReportTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'SHARING_REPORT_TYPE_ID'
    },
    reportContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'REPORT_CONTENT'
    }
  }, {
    sequelize,
    tableName: 'TB_SHARING_REPORT_TYPE'
    });
  return SharingReportType;
  }
}
