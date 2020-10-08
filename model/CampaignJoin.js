/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CampaignJoin.init(sequelize, DataTypes);
}

class CampaignJoin extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    campaignJoinId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'CAMPAIGN_JOIN_ID'
    },
    arrivalCost: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'ARRIVAL_COST'
    },
    campaignReason: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'CAMPAIGN_REASON'
    },
    confirmBoxCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'CONFIRM_BOX_CNT'
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
    deliveryType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'DELIVERY_TYPE'
    },
    desireDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'DESIRE_DATE'
    },
    donationBoxCnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'DONATION_BOX_CNT'
    },
    donationCost: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'DONATION_COST'
    },
    donationPhoto: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'DONATION_PHOTO'
    },
    gifticonCost: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'GIFTICON_COST'
    },
    isChoiceExperience: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'IS_CHOICE_EXPERIENCE'
    },
    isConfirmGoods: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'IS_CONFIRM_GOODS'
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
    phone: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'PHONE'
    },
    socialNumber: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'SOCIAL_NUMBER'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    userName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'USER_NAME'
    },
    visitAddress1: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'VISIT_ADDRESS1'
    },
    visitAddress2: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'VISIT_ADDRESS2'
    },
    visitZipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'VISIT_ZIP_CODE'
    },
    campaignId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_CAMPAIGN',
        key: 'CAMPAIGN_ID'
      },
      unique: "FK_CAMPAIGN_JOIN_TO_CAMPAIGN",
      field: 'CAMPAIGN_ID'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_JOIN_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_CAMPAIGN_JOIN_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_CAMPAIGN_JOIN'
    });
  return CampaignJoin;
  }
}
