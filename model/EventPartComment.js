/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return EventPartComment.init(sequelize, DataTypes);
}

class EventPartComment extends Sequelize.Model {
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
      unique: "FK_EVENT_PART_COMMENT_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_EVENT_PART_COMMENT_TO_USER2",
      field: 'CHG_ID'
    },
    partId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_EVENT_PART',
        key: 'PART_ID'
      },
      unique: "FK_EVENT_PART_COMMENT_TO_EVENT_PART",
      field: 'PART_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_EVENT_PART_COMMENT'
    });
  return EventPartComment;
  }
}
