'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Qna.init(sequelize, DataTypes);
}

class Qna extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    qnaId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'QNA_ID'
    },
    answerContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'ANSWER_CONTENT'
    },
    answerDt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'ANSWER_DT'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'REG_DT'
    },
    createdIp: {
      type: DataTypes.STRING(255),
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
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CHG_IP'
    },
    questionContent: {
      type: "LONGTEXT",
      allowNull: true,
      field: 'QUESTION_CONTENT'
    },
    questionEmail: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'QUESTION_EMAIL'
    },
    questionImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'QUESTION_IMAGE'
    },
    questionName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'QUESTION_NAME'
    },
    questionPasswd: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'QUESTION_PASSWD'
    },
    questionPhone: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'QUESTION_PHONE'
    },
    questionTitle: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'QUESTION_TITLE'
    },
    qnaStatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'QNA_STATUS'
    },
    qnaType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'QNA_TYPE'
    },
    answerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_QNA_TO_USER2",
      field: 'ANSWER_ID'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_USER',
        key: 'USER_ID'
      },
      unique: "FK_QNA_TO_USER1",
      field: 'REG_ID'
    },
    qnaBigCateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_QNA_BIG_CATE',
        key: 'QNA_BIG_CATE_ID'
      },
      unique: "FK_QNA_TO_QNA_BIGCATE",
      field: 'QNA_BIG_CATE_ID'
    },
    qnaSmallCateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TB_QNA_SMALL_CATE',
        key: 'QNA_SMALL_CATE_ID'
      },
      unique: "FK_QNA_TO_QNA_SMALLCATE",
      field: 'QNA_SMALL_CATE_ID'
    }
  }, {
    sequelize,
    createdAt:"createdDate",
    updatedAt:"updatedDate",
    tableName: 'TB_QNA',
    });
  return Qna;
  }
}
