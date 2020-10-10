'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CampaignCheerComment.init(sequelize, DataTypes);
}

class CampaignCheerComment extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    campaignCheerCommentId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'CAMPAIGN_CHEER_COMMENT_ID'
    },
    comment: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'COMMENT'
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
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    campaignId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_CAMPAIGN',
        key: 'CAMPAIGN_ID'
      },
      unique: "FK_CAMPAIGN_CHEER_COMMENT_TO_CAMPAIGN",
      field: 'CAMPAIGN_ID'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_CHEER_COMMENT_TO_USER1",
      field: 'REG_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_CHEER_COMMENT_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_CAMPAIGN_CHEER_COMMENT'
    });
  return CampaignCheerComment;
  }
}
