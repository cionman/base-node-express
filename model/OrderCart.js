/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return OrderCart.init(sequelize, DataTypes);
}

class OrderCart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    orderCartId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ORDER_CART_ID'
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
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_CART_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_LECTURE_CART_TO_USER2",
      field: 'CHG_ID'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_ORDER_CART_TO_USER3",
      field: 'USER_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_ORDER_CART'
    });
  return OrderCart;
  }
}
