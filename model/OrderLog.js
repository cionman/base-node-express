/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return OrderLog.init(sequelize, DataTypes);
}

class OrderLog extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    orderLogId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ORDER_LOG_ID'
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'AMOUNT'
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
    goodsId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'GOODS_ID'
    },
    goodsType: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'GOODS_TYPE'
    },
    orderMethod: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ORDER_METHOD'
    },
    orderStatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ORDER_STATUS'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_LOG_TO_USER1",
      field: 'REG_ID'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_LOG_TO_USER2",
      field: 'USER_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_ORDER_LOG'
    });
  return OrderLog;
  }
}
