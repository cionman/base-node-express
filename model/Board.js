'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Board.init(sequelize, DataTypes);
}

class Board extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    boardId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'BOARD_ID'
    },
    approveDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'APPROVE_DATE'
    },
    approveStatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'APPROVE_STATUS'
    },
    cancelDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CANCEL_DATE'
    },
    commentCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'COMMENT_CNT'
    },
    content: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CONTENT'
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
    boardFileIds: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'BOARD_FILE_IDS'
    },
    likeCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'LIKE_CNT'
    },
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'MENU_UID'
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
    rejectDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REJECT_DATE'
    },
    boardRepresentImg: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'BOARD_REPRESENT_IMG'
    },
    slug: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'SLUG'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    boardTag: {
      type: DataTypes.STRING(3000),
      allowNull: true,
      field: 'BOARD_TAG'
    },
    title: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'TITLE'
    },
    topYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'TOP_YN'
    },
    viewCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'VIEW_CNT'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_BOARD_TO_USER",
      field: 'REG_ID'
    },
    cateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_BOARD_CTGRY',
        key: 'BOARD_CTGRY_ID'
      },
      unique: "FK_BOARD_TO_BOARD_CATE",
      field: 'CATE_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_BOARD_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_BOARD'
    });
  return Board;
  }

  static associate(models) {
    models.Board.belongsTo(models.User, {
      foreignKey: {
        name: 'createdBy'
      }
    })
  }
}
