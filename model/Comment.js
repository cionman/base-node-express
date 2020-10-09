'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Comment.init(sequelize, DataTypes);
}

class Comment extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    commentId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'COMMENT_ID'
    },
    commentContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'COMMENT_CONTENT'
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
    commentImage: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'COMMENT_IMAGE'
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
    commentRating: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: 'COMMENT_RATING'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    typeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'TYPE_ID'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_COMMENT_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_COMMENT_TO_USER2",
      field: 'CHG_ID'
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_COMMENT',
        key: 'COMMENT_ID'
      },
      unique: "FK_COMMENT_TO_COMMENT",
      field: 'PARENT_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_COMMENT'
    });
  return Comment;
  }
}
