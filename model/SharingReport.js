/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SharingReport.init(sequelize, DataTypes);
}

class SharingReport extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    sharingReportId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'SHARING_REPORT_ID'
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
    reportEtc: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'REPORT_ETC'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SHARING_REPORT_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SHARING_REPORT_TO_USER2",
      field: 'CHG_ID'
    },
    reportTargetUserid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SHARING_REPORT_TO_USER3",
      field: 'REPORT_TARGET_USERID'
    },
    sharingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_SHARING',
        key: 'SHARING_ID'
      },
      unique: "FK_SHARING_REPORT_TO_SHARING",
      field: 'SHARING_ID'
    },
    sharingReportTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'TB_SHARING_REPORT_TYPE',
        key: 'SHARING_REPORT_TYPE_ID'
      },
      unique: "FK_SHARING_REPORT_TO_SHARING_REPORT_TYPE",
      field: 'SHARING_REPORT_TYPE_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_SHARING_REPORT'
    });
  return SharingReport;
  }
}
