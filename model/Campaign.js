/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Campaign.init(sequelize, DataTypes);
}

class Campaign extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    campaignId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'CAMPAIGN_ID'
    },
    campaignAddress: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'CAMPAIGN_ADDRESS'
    },
    campaignDesc: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CAMPAIGN_DESC'
    },
    campaignEnd: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'CAMPAIGN_END'
    },
    campaignGoalCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'CAMPAIGN_GOAL_CNT'
    },
    campaignGoodsType: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'CAMPAIGN_GOODS_TYPE'
    },
    campaignManager: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'CAMPAIGN_MANAGER'
    },
    campaignNews: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CAMPAIGN_NEWS'
    },
    campaignPhone: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'CAMPAIGN_PHONE'
    },
    campaignResult: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CAMPAIGN_RESULT'
    },
    campaignResultImg: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CAMPAIGN_RESULT_IMG'
    },
    campaignStart: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'CAMPAIGN_START'
    },
    campaignType: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'CAMPAIGN_TYPE'
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
    deliveryCost: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'DELIVERY_COST'
    },
    deliveryTypeSetting: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'DELIVERY_TYPE_SETTING'
    },
    destroySocialNumberCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'DESTROY_SOCIAL_NUMBER_CNT'
    },
    destroySocialNumberDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'DESTROY_SOCIAL_NUMBER_DATE'
    },
    donationPricePerBox: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'DONATION_PRICE_PER_BOX'
    },
    gifticonCost: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'GIFTICON_COST'
    },
    isExposureAddress: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'IS_EXPOSURE_ADDRESS'
    },
    isReceipt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'IS_RECEIPT'
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
    campaignName: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'CAMPAIGN_NAME'
    },
    newsAlimCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'NEWS_ALIM_COUNT'
    },
    campaignRepresentImg: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'CAMPAIGN_REPRESENT_IMG'
    },
    resultAlimCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'RESULT_ALIM_COUNT'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    viewCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'VIEW_CNT'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_CAMPAIGN'
    });
  return Campaign;
  }
}
