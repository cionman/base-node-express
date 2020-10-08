/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return EventLike.init(sequelize, DataTypes);
}

class EventLike extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    eventId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_EVENT',
        key: 'EVENT_ID'
      },
      field: 'EVENT_ID'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      field: 'USER_ID'
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
    }
  }, {
    sequelize,
    tableName: 'TB_EVENT_LIKE'
    });
  return EventLike;
  }
}
