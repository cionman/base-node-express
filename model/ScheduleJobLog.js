'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ScheduleJobLog.init(sequelize, DataTypes);
}

class ScheduleJobLog extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    scheduleLogId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'SCHEDULE_LOG_ID'
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
    },
    jobLogType: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'JOB_LOG_TYPE'
    },
    jobName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'JOB_NAME'
    },
    logDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'LOG_DT'
    },
    scheduleJobId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'TB_SCHEDULE_JOB',
        key: 'SCHEDULE_JOB_ID'
      },
      unique: "FK_SCHEDULE_JOB_LOG_TO_SCHEDULE",
      field: 'SCHEDULE_JOB_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_SCHEDULE_JOB_LOG'
    });
  return ScheduleJobLog;
  }
}
