'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ScheduleJob.init(sequelize, DataTypes);
}

class ScheduleJob extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    scheduleJobId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'SCHEDULE_JOB_ID'
    },
    jobName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'JOB_NAME'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CHG_DT'
    },
    modifiedIp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'CHG_IP'
    },
    runYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'RUN_YN'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SCHEDULE_JOB_TO_USER1",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    createdAt: false,
    updatedAt:"modifiedDate",
    tableName: 'TB_SCHEDULE_JOB'
    });
  return ScheduleJob;
  }
}
