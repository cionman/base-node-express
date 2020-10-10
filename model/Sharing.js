'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Sharing.init(sequelize, DataTypes);
}

class Sharing extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    sharingId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'SHARING_ID'
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
    experienceSharePersonell: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'EXPERIENCE_SHARE_PERSONELL'
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
    regionSum: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'REGION_SUM'
    },
    representImg: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'REPRESENT_IMG'
    },
    sharePrice: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'SHARE_PRICE'
    },
    sharingCompleteDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'SHARING_COMPLETE_DATE'
    },
    sharingProgressType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'SHARING_PROGRESS_TYPE'
    },
    sharingType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SHARING_TYPE'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    title: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'TITLE'
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
      unique: "FK_SHARING_TO_USER1",
      field: 'REG_ID'
    },
    modifiedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SHARING_TO_USER2",
      field: 'CHG_ID'
    },
    regionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_REGION',
        key: 'REGION_ID'
      },
      unique: "FK_SHARING_TO_REGION",
      field: 'REGION_ID'
    },
    sharingExperienceTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'TB_SHARING_EXPERIENCE_TYPE',
        key: 'SHARING_EXPERIENCE_TYPE_ID'
      },
      unique: "FK_SHARING_TO_SHARING_EXPERIENCE_TYPE",
      field: 'SHARING_EXPERIENCE_TYPE_ID'
    },
    sharingGoodsTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'TB_SHARING_GOODS_TYPE',
        key: 'SHARING_GOODS_TYPE_ID'
      },
      unique: "FK_SHARING_TO_SHARING_GOODS_TYPE",
      field: 'SHARING_GOODS_TYPE_ID'
    },
    sharingHobbyTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'TB_SHARING_HOBBY_TYPE',
        key: 'SHARING_HOBBY_TYPE_ID'
      },
      unique: "FK_SHARING_TO_SHARING_HOBBY_TYPE",
      field: 'SHARING_HOBBY_TYPE_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_SHARING'
    });
  return Sharing;
  }
}
