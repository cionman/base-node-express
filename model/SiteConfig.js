'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SiteConfig.init(sequelize, DataTypes);
}

class SiteConfig extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    siteConfigId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'SITE_CONFIG_ID'
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
    designTemplate: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'DESIGN_TEMPLATE'
    },
    emailYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'EMAIL_YN'
    },
    errorNotiYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'ERROR_NOTI_YN'
    },
    facebookAppId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'FACEBOOK_APP_ID'
    },
    facebookAppSecretCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'FACEBOOK_APP_SECRET_CODE'
    },
    googleAnalyticsId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'GOOGLE_ANALYTICS_ID'
    },
    githubClientId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'GITHUB_CLIENT_ID'
    },
    githubClientSecret: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'GITHUB_CLIENT_SECRET'
    },
    googleClientId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'GOOGLE_CLIENT_ID'
    },
    googleClientSecret: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'GOOGLE_CLIENT_SECRET'
    },
    googleSiteVerification: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'GOOGLE_SITE_VERIFICATION'
    },
    kakaoJavascriptKey: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'KAKAO_JAVASCRIPT_KEY'
    },
    kakaoRestapiKey: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'KAKAO_RESTAPI_KEY'
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
    naverClientId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'NAVER_CLIENT_ID'
    },
    naverClientSecret: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'NAVER_CLIENT_SECRET'
    },
    naverSiteVerification: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'NAVER_SITE_VERIFICATION'
    },
    notiSlackChannelName: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'NOTI_SLACK_CHANNEL_NAME'
    },
    recaptchaV3Score: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'RECAPTCHA_V3_SCORE'
    },
    recaptchaV2Client: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'RECAPTCHA_V2_CLIENT'
    },
    recaptchaV2Server: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'RECAPTCHA_V2_SERVER'
    },
    recaptchaV3Client: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'RECAPTCHA_V3_CLIENT'
    },
    recaptchaV3Server: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'RECAPTCHA_V3_SERVER'
    },
    representAddress: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_ADDRESS'
    },
    representEmail: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'REPRESENT_EMAIL'
    },
    representFacebook: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_FACEBOOK'
    },
    representFax: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'REPRESENT_FAX'
    },
    representInstagram: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_INSTAGRAM'
    },
    representKakao: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_KAKAO'
    },
    representNaver: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_NAVER'
    },
    representPhone: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'REPRESENT_PHONE'
    },
    representTwitter: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_TWITTER'
    },
    representYoutube: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'REPRESENT_YOUTUBE'
    },
    seoSiteCopyright: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'SEO_SITE_COPYRIGHT'
    },
    seoSiteDesc: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'SEO_SITE_DESC'
    },
    seoSiteKeywords: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'SEO_SITE_KEYWORDS'
    },
    siteName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'SITE_NAME'
    },
    seoSiteSubject: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'SEO_SITE_SUBJECT'
    },
    slackBotOauthToken: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'SLACK_BOT_OAUTH_TOKEN'
    },
    sleepUserInstantDestroyYn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'SLEEP_USER_INSTANT_DESTROY_YN'
    },
    regId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SITE_CONFIG_TO_USER1",
      field: 'REG_ID'
    },
    chgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_SITE_CONFIG_TO_USER2",
      field: 'CHG_ID'
    }
  }, {
    sequelize,
    tableName: 'TB_SITE_CONFIG'
    });
  return SiteConfig;
  }
}
