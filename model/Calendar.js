/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Calendar.init(sequelize, DataTypes);
}

class Calendar extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    calendarId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'CALENDAR_ID'
    },
    alldayYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'ALLDAY_YN'
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
    scheduleDesc: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'SCHEDULE_DESC'
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'END_DATE'
    },
    endDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'END_DATE_TIME'
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'END_TIME'
    },
    externalSpace: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'EXTERNAL_SPACE'
    },
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'MENU_UID'
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
    relateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'RELATE_ID'
    },
    repeatCode: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'REPEAT_CODE'
    },
    repeatMonthType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'REPEAT_MONTH_TYPE'
    },
    repeatSpan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'REPEAT_SPAN'
    },
    repeatType: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'REPEAT_TYPE'
    },
    repeatWeekday: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'REPEAT_WEEKDAY'
    },
    scheduleType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SCHEDULE_TYPE'
    },
    spaceType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'SPACE_TYPE'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'START_DATE'
    },
    startDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'START_DATE_TIME'
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'START_TIME'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'TITLE'
    },
    yyyymm: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'YYYYMM'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CALENDAR_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CALENDAR_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_CALENDAR'
    });
  return Calendar;
  }
}
