'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CampaignBlackUser.init(sequelize, DataTypes);
}

class CampaignBlackUser extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    campaignBlackUserId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'CAMPAIGN_BLACK_USER_ID'
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
      unique: "FK_CAMPAIGN_BLACK_TO_CAMPAIGN",
      field: 'CAMPAIGN_ID'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_BLACK_TO_USER1",
      field: 'REG_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_BLACK_TO_USER2",
      field: 'CHG_ID'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_BLACK_TO_USER3",
      field: 'USER_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_CAMPAIGN_BLACK_USER'
    });
  return CampaignBlackUser;
  }
}
