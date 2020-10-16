'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return Popup.init(sequelize, DataTypes);
};

class Popup extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            popupId: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                field: 'POPUP_ID'
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
            popupDesktopImage: {
                type: DataTypes.STRING(300),
                allowNull: true,
                field: 'POPUP_DESKTOP_IMAGE'
            },
            popupEdDate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                field: 'POPUP_ED_DATE'
            },
            menuUid: {
                type: DataTypes.STRING(50),
                allowNull: true,
                field: 'MENU_UID'
            },
            popupMobileImage: {
                type: DataTypes.STRING(300),
                allowNull: true,
                field: 'POPUP_MOBILE_IMAGE'
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
            newWindowYn: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                field: 'NEW_WINDOW_YN'
            },
            popupPosition: {
                type: DataTypes.STRING(15),
                allowNull: true,
                field: 'POPUP_POSITION'
            },
            popupType: {
                type: DataTypes.STRING(15),
                allowNull: true,
                field: 'POPUP_TYPE'
            },
            popupStDate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                field: 'POPUP_ST_DATE'
            },
            status: {
                type: DataTypes.STRING(10),
                allowNull: true,
                field: 'STATUS'
            },
            popupTitle: {
                type: DataTypes.STRING(500),
                allowNull: true,
                field: 'POPUP_TITLE'
            },
            popupTxt: {
                type: DataTypes.STRING(1000),
                allowNull: true,
                field: 'POPUP_TXT'
            },
            popupTxtContent: {
                type: "LONGTEXT",
                allowNull: true,
                field: 'POPUP_TXT_CONTENT'
            },
            popupUrl: {
                type: DataTypes.STRING(500),
                allowNull: true,
                field: 'POPUP_URL'
            },
            createdBy: {
                type: DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'TB_USER',
                    key: 'USER_ID'
                },
                unique: "FK_POPUP_TO_USER1",
                field: 'REG_ID'
            },
            modifiedBy: {
                type: DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'TB_USER',
                    key: 'USER_ID'
                },
                unique: "FK_POPUP_TO_USER2",
                field: 'CHG_ID'
            }
        }, {
            sequelize,
            createdAt: "createdDate",
            updatedAt: "modifiedDate",
            tableName: 'TB_POPUP'
        });
        return Popup;
    }
}
