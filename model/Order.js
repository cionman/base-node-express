'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Order.init(sequelize, DataTypes);
}

class Order extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    orderId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ORDER_ID'
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
    goodsName: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'GOODS_NAME'
    },
    goodsType: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'GOODS_TYPE'
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
    orderMethod: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'ORDER_METHOD'
    },
    orderStatus: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'ORDER_STATUS'
    },
    payment: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'PAYMENT'
    },
    refund: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'REFUND'
    },
    refundCompleteDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REFUND_COMPLETE_DATE'
    },
    refundInfo: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'REFUND_INFO'
    },
    refundRequestDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REFUND_REQUEST_DATE'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_TO_USER2",
      field: 'CHG_ID'
    },
    orderInfoId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_ORDER_INFO',
        key: 'ORDER_INFO_ID'
      },
      unique: "FK_ORDER_TO_ORDER_INFO",
      field: 'ORDER_INFO_ID'
    },
    orderUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_TO_USER3",
      field: 'ORDER_USER_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_ORDER'
    });
  return Order;
  }
}
