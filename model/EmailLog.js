/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return EmailLog.init(sequelize, DataTypes);
}

class EmailLog extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    emailLogId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'EMAIL_LOG_ID'
    },
    content: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CONTENT'
    },
    regDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    mailFrom: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'MAIL_FROM'
    },
    sendType: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'SEND_TYPE'
    },
    title: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'TITLE'
    },
    mailTo: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'MAIL_TO'
    }
  }, {
    sequelize,
    tableName: 'TB_EMAIL_LOG'
    });
  return EmailLog;
  }
}
