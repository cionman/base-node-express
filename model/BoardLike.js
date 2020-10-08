/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return BoardLike.init(sequelize, DataTypes);
}

class BoardLike extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    boardId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_BOARD',
        key: 'BOARD_ID'
      },
      field: 'BOARD_ID'
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
    tableName: 'TB_BOARD_LIKE'
    });
  return BoardLike;
  }
}
