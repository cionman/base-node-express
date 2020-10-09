'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return OrderWebhook.init(sequelize, DataTypes);
}

class OrderWebhook extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    orderWebhookId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ORDER_WEBHOOK_ID'
    },
    regDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    impUid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'IMP_UID'
    },
    merchantUid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'MERCHANT_UID'
    },
    status: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'TB_ORDER_WEBHOOK'
    });
  return OrderWebhook;
  }
}
