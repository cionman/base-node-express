'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return OrderInfo.init(sequelize, DataTypes);
}

class OrderInfo extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    orderInfoId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ORDER_INFO_ID'
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'AMOUNT'
    },
    cancelAmount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'CANCEL_AMOUNT'
    },
    cancelGoodsIdList: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CANCEL_GOODS_ID_LIST'
    },
    cancelInfo: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CANCEL_INFO'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    createdIp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'REG_IP'
    },
    goodsType: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'GOODS_TYPE'
    },
    impUid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'IMP_UID'
    },
    isCancel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'IS_CANCEL'
    },
    merchantUid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'MERCHANT_UID'
    },
    orderGoodsIdList: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ORDER_GOODS_ID_LIST'
    },
    orderMethod: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ORDER_METHOD'
    },
    payInfo: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'PAY_INFO'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_INFO_TO_USER1",
      field: 'REG_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    tableName: 'TB_ORDER_INFO'
    });
  return OrderInfo;
  }
}
