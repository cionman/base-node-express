/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return MenuInfo.init(sequelize, DataTypes);
}

class MenuInfo extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    menuInfoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'MENU_INFO_ID'
    },
    boardAccessType: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'BOARD_ACCESS_TYPE'
    },
    boardCategoryYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'BOARD_CATEGORY_YN'
    },
    boardAttachFileYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'BOARD_ATTACH_FILE_YN'
    },
    breadCrumb: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'BREAD_CRUMB'
    },
    calendarMenuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'CALENDAR_MENU_UID'
    },
    commentType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'COMMENT_TYPE'
    },
    contentType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'CONTENT_TYPE'
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
    customPagePath: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'CUSTOM_PAGE_PATH'
    },
    fullUrl: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "UQ_MENU_INFO__FULL_URL",
      field: 'FULL_URL'
    },
    historyMonthImageYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'HISTORY_MONTH_IMAGE_YN'
    },
    historyMonthInputType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'HISTORY_MONTH_INPUT_TYPE'
    },
    historyMonthUrlYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'HISTORY_MONTH_URL_YN'
    },
    historyOrderType: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'HISTORY_ORDER_TYPE'
    },
    historyYearImageYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'HISTORY_YEAR_IMAGE_YN'
    },
    historyYearSummaryYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'HISTORY_YEAR_SUMMARY_YN'
    },
    linkNewWindowYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'LINK_NEW_WINDOW_YN'
    },
    linkUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'LINK_URL'
    },
    menuType: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'MENU_TYPE'
    },
    menuUid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "UQ_MENU_INFO__MENU_UID",
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'NAME'
    },
    orderSeq: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ORDER_SEQ'
    },
    parentMenuId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'PARENT_MENU_ID'
    },
    socialShareList: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'SOCIAL_SHARE_LIST'
    },
    socialShareYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'SOCIAL_SHARE_YN'
    },
    staticContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'STATIC_CONTENT'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'STATUS'
    },
    urlKeyword: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'URL_KEYWORD'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_MENU_INFO_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_MENU_INFO_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_MENU_INFO'
    });
  return MenuInfo;
  }
}
