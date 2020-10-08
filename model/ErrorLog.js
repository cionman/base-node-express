/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ErrorLog.init(sequelize, DataTypes);
}

class ErrorLog extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    errorLogId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ERROR_LOG_ID'
    },
    regDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    errorDetail: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'ERROR_DETAIL'
    },
    errorTitle: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'ERROR_TITLE'
    }
  }, {
    sequelize,
    tableName: 'TB_ERROR_LOG'
    });
  return ErrorLog;
  }
}
