
    create table TB_ATTACHED_FILE (
       ATTACHED_FILE_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        FILE_NAME varchar(300),
        FILE_SIZE bigint,
        FILE_URL varchar(300),
        FILE_UUID char(32),
        REG_ID bigint,
        primary key (ATTACHED_FILE_ID)
    ) engine=InnoDB;

    create table TB_BOARD (
       BOARD_ID bigint not null auto_increment,
        APPROVE_DATE datetime,
        APPROVE_STATUS varchar(10),
        CANCEL_DATE datetime,
        COMMENT_CNT bigint,
        CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        BOARD_FILE_IDS varchar(1000),
        LIKE_CNT bigint,
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        REJECT_DATE datetime,
        BOARD_REPRESENT_IMG varchar(300),
        SLUG varchar(300),
        STATUS varchar(10),
        BOARD_TAG varchar(3000),
        TITLE varchar(300),
        TOP_YN bit,
        VIEW_CNT bigint,
        REG_ID bigint,
        CATE_ID bigint,
        CHG_ID bigint,
        primary key (BOARD_ID)
    ) engine=InnoDB;

    create table TB_BOARD_CTGRY (
       BOARD_CTGRY_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        NAME varchar(300),
        STATUS varchar(10),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (BOARD_CTGRY_ID)
    ) engine=InnoDB;

    create table TB_BOARD_LIKE (
       BOARD_ID bigint not null,
        USER_ID bigint not null,
        REG_DT datetime,
        REG_IP varchar(15),
        primary key (BOARD_ID, USER_ID)
    ) engine=InnoDB;

    create table TB_CALENDAR (
       CALENDAR_ID bigint not null auto_increment,
        ALLDAY_YN bit,
        REG_DT datetime,
        REG_IP varchar(15),
        SCHEDULE_DESC longtext,
        END_DATE date,
        END_DATE_TIME datetime,
        END_TIME time,
        EXTERNAL_SPACE varchar(500),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        RELATE_ID bigint,
        REPEAT_CODE bigint,
        REPEAT_MONTH_TYPE varchar(10),
        REPEAT_SPAN bigint,
        REPEAT_TYPE varchar(5),
        REPEAT_WEEKDAY varchar(100),
        SCHEDULE_TYPE varchar(10),
        SPACE_TYPE varchar(20),
        START_DATE date,
        START_DATE_TIME datetime,
        START_TIME time,
        STATUS varchar(10),
        TITLE varchar(500),
        YYYYMM varchar(6),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (CALENDAR_ID)
    ) engine=InnoDB;

    create table TB_CAMPAIGN (
       CAMPAIGN_ID bigint not null auto_increment,
        CAMPAIGN_ADDRESS varchar(300),
        CAMPAIGN_DESC longtext,
        CAMPAIGN_END date,
        CAMPAIGN_GOAL_CNT bigint,
        CAMPAIGN_GOODS_TYPE varchar(300),
        CAMPAIGN_MANAGER varchar(100),
        CAMPAIGN_NEWS longtext,
        CAMPAIGN_PHONE varchar(50),
        CAMPAIGN_RESULT longtext,
        CAMPAIGN_RESULT_IMG longtext,
        CAMPAIGN_START date,
        CAMPAIGN_TYPE varchar(30),
        REG_DT datetime,
        REG_IP varchar(15),
        DELIVERY_COST bigint,
        DELIVERY_TYPE_SETTING varchar(50),
        DESTROY_SOCIAL_NUMBER_CNT bigint,
        DESTROY_SOCIAL_NUMBER_DATE datetime,
        DONATION_PRICE_PER_BOX bigint,
        GIFTICON_COST bigint,
        IS_EXPOSURE_ADDRESS bit,
        IS_RECEIPT bit,
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        CAMPAIGN_NAME varchar(300),
        NEWS_ALIM_COUNT integer,
        CAMPAIGN_REPRESENT_IMG varchar(300),
        RESULT_ALIM_COUNT integer,
        STATUS varchar(10),
        VIEW_CNT bigint,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (CAMPAIGN_ID)
    ) engine=InnoDB;

    create table TB_CAMPAIGN_BLACK_USER (
       CAMPAIGN_BLACK_USER_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        STATUS varchar(10),
        CAMPAIGN_ID bigint,
        REG_ID bigint,
        CHG_ID bigint,
        USER_ID bigint,
        primary key (CAMPAIGN_BLACK_USER_ID)
    ) engine=InnoDB;

    create table TB_CAMPAIGN_CHEER_COMMENT (
       CAMPAIGN_CHEER_COMMENT_ID bigint not null auto_increment,
        COMMENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        STATUS varchar(10),
        CAMPAIGN_ID bigint,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (CAMPAIGN_CHEER_COMMENT_ID)
    ) engine=InnoDB;

    create table TB_CAMPAIGN_JOIN (
       CAMPAIGN_JOIN_ID bigint not null auto_increment,
        ARRIVAL_COST bigint,
        CAMPAIGN_REASON longtext,
        CONFIRM_BOX_CNT bigint,
        REG_DT datetime,
        REG_IP varchar(15),
        DELIVERY_COST bigint,
        DELIVERY_TYPE varchar(20),
        DESIRE_DATE date,
        DONATION_BOX_CNT bigint,
        DONATION_COST bigint,
        DONATION_PHOTO varchar(300),
        GIFTICON_COST bigint,
        IS_CHOICE_EXPERIENCE bit,
        IS_CONFIRM_GOODS bit,
        IS_RECEIPT bit,
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        PHONE varchar(200),
        SOCIAL_NUMBER varchar(300),
        STATUS varchar(10),
        USER_NAME varchar(200),
        VISIT_ADDRESS1 varchar(4000),
        VISIT_ADDRESS2 varchar(4000),
        VISIT_ZIP_CODE varchar(10),
        CAMPAIGN_ID bigint,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (CAMPAIGN_JOIN_ID)
    ) engine=InnoDB;

    create table TB_CHAT_MESSAGE (
       CHAT_MESSAGE_ID bigint not null auto_increment,
        MESSAGE longtext,
        MESSAGE_TYPE varchar(10),
        CHAT_ROOM_ID varchar(255),
        SENDER bigint,
        primary key (CHAT_MESSAGE_ID)
    ) engine=InnoDB;

    create table TB_CHAT_ROOM (
       CHAT_ROOM_ID varchar(255) not null,
        NAME varchar(500),
        USER_COUNT bigint,
        primary key (CHAT_ROOM_ID)
    ) engine=InnoDB;

    create table TB_CHAT_ROOM_USER (
       CHAT_ROOM_ID varchar(255) not null,
        USER_ID bigint not null,
        SESSION_ID varchar(100),
        primary key (CHAT_ROOM_ID, USER_ID)
    ) engine=InnoDB;

    create table TB_COMMENT (
       COMMENT_ID bigint not null auto_increment,
        COMMENT_CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        COMMENT_IMAGE varchar(300),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        COMMENT_RATING char(1),
        STATUS varchar(10),
        TYPE_ID bigint,
        REG_ID bigint,
        CHG_ID bigint,
        PARENT_ID bigint,
        primary key (COMMENT_ID)
    ) engine=InnoDB;

    create table TB_EMAIL_LOG (
       EMAIL_LOG_ID bigint not null auto_increment,
        CONTENT longtext,
        REG_DT datetime,
        MAIL_FROM varchar(200),
        SEND_TYPE varchar(30),
        TITLE varchar(1000),
        MAIL_TO longtext,
        primary key (EMAIL_LOG_ID)
    ) engine=InnoDB;

    create table TB_ERROR_LOG (
       ERROR_LOG_ID bigint not null auto_increment,
        REG_DT datetime,
        ERROR_DETAIL longtext,
        ERROR_TITLE longtext,
        primary key (ERROR_LOG_ID)
    ) engine=InnoDB;

    create table TB_EVENT (
       EVENT_ID bigint not null auto_increment,
        COMMENT_CNT bigint,
        EVENT_CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        EVENT_END date,
        EVENT_IMAGE varchar(300),
        LIKE_CNT bigint,
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        PART_CNT bigint,
        EVENT_START date,
        EVENT_STATUS varchar(10),
        EVENT_TITLE varchar(300),
        EVENT_TYPE varchar(10),
        VIEW_CNT bigint,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (EVENT_ID)
    ) engine=InnoDB;

    create table TB_EVENT_LIKE (
       EVENT_ID bigint not null,
        USER_ID bigint not null,
        REG_DT datetime,
        REG_IP varchar(15),
        primary key (EVENT_ID, USER_ID)
    ) engine=InnoDB;

    create table TB_EVENT_PART (
       PART_ID bigint not null auto_increment,
        ANSWER_STATUS varchar(10),
        ANSWER_CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        PART_STATUS varchar(5),
        REG_ID bigint,
        EVENT_ID bigint,
        CHG_ID bigint,
        primary key (PART_ID)
    ) engine=InnoDB;

    create table TB_EVENT_PART_COMMENT (
       COMMENT_ID bigint not null auto_increment,
        COMMENT_CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        COMMENT_IMAGE varchar(300),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        STATUS varchar(10),
        REG_ID bigint,
        CHG_ID bigint,
        PART_ID bigint,
        primary key (COMMENT_ID)
    ) engine=InnoDB;

    create table TB_FAQ (
       FAQ_ID bigint not null auto_increment,
        CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(255),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(255),
        ORDER_SEQ integer,
        PUBLISH_DT datetime,
        STATUS varchar(10),
        TITLE varchar(500),
        CATE_ID bigint,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (FAQ_ID)
    ) engine=InnoDB;

    create table TB_FAQ_CATE (
       CATE_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(255),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(255),
        CATE_NAME varchar(300),
        ORDER_SEQ integer,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (CATE_ID)
    ) engine=InnoDB;

    create table TB_HISTORY (
       MENU_UID varchar(50) not null,
        HISTORY_CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (MENU_UID)
    ) engine=InnoDB;

    create table TB_KOTLIN_TEST (
       BOARD_ID bigint not null auto_increment,
        CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        modifiedDate datetime,
        CHG_IP varchar(15),
        TITLE varchar(300),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (BOARD_ID)
    ) engine=InnoDB;

    create table TB_LECTURE (
       LECTURE_ID bigint not null auto_increment,
        CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        END_DATE date,
        END_TIME time,
        EXTERNAL_SPACE varchar(500),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        NAME varchar(300),
        PERSONNEL integer,
        RECRUIT_STATUS varchar(20),
        REPRESENT_IMG varchar(200),
        SPACE_TYPE varchar(20),
        START_DATE date,
        START_TIME time,
        STATUS varchar(10),
        TAG varchar(1000),
        TOP_YN bit,
        TUITION bigint,
        VIEW_CNT bigint,
        WEEKDAY varchar(100),
        REG_ID bigint,
        LECTURE_GROUP_ID integer,
        CHG_ID bigint,
        TEACHER_ID bigint,
        primary key (LECTURE_ID)
    ) engine=InnoDB;

    create table TB_LECTURE_GROUP (
       LECTURE_GROUP_ID integer not null auto_increment,
        LECTURE_GROUP_NAME varchar(300),
        MENU_UID varchar(50),
        STATUS varchar(10),
        primary key (LECTURE_GROUP_ID)
    ) engine=InnoDB;

    create table TB_MENU_INFO (
       MENU_INFO_ID integer not null auto_increment,
        BOARD_ACCESS_TYPE varchar(15),
        BOARD_CATEGORY_YN bit,
        BOARD_ATTACH_FILE_YN bit,
        BREAD_CRUMB varchar(255),
        CALENDAR_MENU_UID varchar(50),
        COMMENT_TYPE varchar(100),
        CONTENT_TYPE varchar(100),
        REG_DT datetime,
        REG_IP varchar(15),
        CUSTOM_PAGE_PATH varchar(500),
        FULL_URL varchar(50),
        HISTORY_MONTH_IMAGE_YN bit,
        HISTORY_MONTH_INPUT_TYPE varchar(10),
        HISTORY_MONTH_URL_YN bit,
        HISTORY_ORDER_TYPE varchar(5),
        HISTORY_YEAR_IMAGE_YN bit,
        HISTORY_YEAR_SUMMARY_YN bit,
        LINK_NEW_WINDOW_YN bit,
        LINK_URL varchar(500),
        MENU_TYPE varchar(15),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        NAME varchar(100),
        ORDER_SEQ integer,
        PARENT_MENU_ID integer,
        SOCIAL_SHARE_LIST varchar(500),
        SOCIAL_SHARE_YN bit,
        STATIC_CONTENT longtext,
        STATUS varchar(10),
        URL_KEYWORD varchar(20),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (MENU_INFO_ID)
    ) engine=InnoDB;

    create table TB_ORDER (
       ORDER_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        GOODS_ID bigint,
        GOODS_NAME varchar(500),
        GOODS_TYPE varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        ORDER_METHOD varchar(25),
        ORDER_STATUS varchar(20),
        PAYMENT bigint,
        REFUND bigint,
        REFUND_COMPLETE_DATE datetime,
        REFUND_INFO varchar(200),
        REFUND_REQUEST_DATE datetime,
        REG_ID bigint,
        CHG_ID bigint,
        ORDER_INFO_ID bigint,
        ORDER_USER_ID bigint,
        primary key (ORDER_ID)
    ) engine=InnoDB;

    create table TB_ORDER_CART (
       ORDER_CART_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        GOODS_ID bigint,
        GOODS_NAME varchar(500),
        GOODS_TYPE varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        STATUS varchar(10),
        REG_ID bigint,
        CHG_ID bigint,
        USER_ID bigint,
        primary key (ORDER_CART_ID)
    ) engine=InnoDB;

    create table TB_ORDER_INFO (
       ORDER_INFO_ID bigint not null auto_increment,
        AMOUNT bigint,
        CANCEL_AMOUNT bigint,
        CANCEL_GOODS_ID_LIST varchar(255),
        CANCEL_INFO longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        GOODS_TYPE varchar(15),
        IMP_UID varchar(100),
        IS_CANCEL bit,
        MERCHANT_UID varchar(100),
        ORDER_GOODS_ID_LIST varchar(255),
        ORDER_METHOD varchar(10),
        PAY_INFO longtext,
        REG_ID bigint,
        primary key (ORDER_INFO_ID)
    ) engine=InnoDB;

    create table TB_ORDER_LOG (
       ORDER_LOG_ID bigint not null auto_increment,
        AMOUNT bigint,
        REG_DT datetime,
        REG_IP varchar(15),
        GOODS_ID bigint,
        GOODS_TYPE varchar(15),
        ORDER_METHOD varchar(10),
        ORDER_STATUS varchar(10),
        REG_ID bigint,
        USER_ID bigint,
        primary key (ORDER_LOG_ID)
    ) engine=InnoDB;

    create table TB_ORDER_WEBHOOK (
       ORDER_WEBHOOK_ID bigint not null auto_increment,
        REG_DT datetime,
        IMP_UID varchar(100),
        MERCHANT_UID varchar(100),
        STATUS varchar(15),
        primary key (ORDER_WEBHOOK_ID)
    ) engine=InnoDB;

    create table TB_POPUP (
       POPUP_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        POPUP_DESKTOP_IMAGE varchar(300),
        POPUP_ED_DATE date,
        MENU_UID varchar(50),
        POPUP_MOBILE_IMAGE varchar(300),
        CHG_DT datetime,
        CHG_IP varchar(15),
        NEW_WINDOW_YN bit,
        POPUP_POSITION varchar(15),
        POPUP_TYPE varchar(15),
        POPUP_ST_DATE date,
        STATUS varchar(10),
        POPUP_TITLE varchar(500),
        POPUP_TXT varchar(1000),
        POPUP_TXT_CONTENT longtext,
        POPUP_URL varchar(500),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (POPUP_ID)
    ) engine=InnoDB;

    create table TB_QNA (
       QNA_ID bigint not null auto_increment,
        ANSWER_CONTENT longtext,
        ANSWER_DT datetime,
        REG_DT datetime,
        REG_IP varchar(255),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(255),
        QUESTION_CONTENT longtext,
        QUESTION_EMAIL varchar(300),
        QUESTION_IMAGE varchar(255),
        QUESTION_NAME varchar(100),
        QUESTION_PASSWD varchar(255),
        QUESTION_PHONE varchar(300),
        QUESTION_TITLE varchar(300),
        QNA_STATUS varchar(10),
        QNA_TYPE varchar(10),
        ANSWER_ID bigint,
        REG_ID bigint,
        QNA_BIG_CATE_ID bigint,
        QNA_SMALL_CATE_ID bigint,
        primary key (QNA_ID)
    ) engine=InnoDB;

    create table TB_QNA_BIG_CATE (
       QNA_BIG_CATE_ID bigint not null auto_increment,
        CATE_ORDER bigint,
        REG_DT datetime,
        REG_IP varchar(255),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(255),
        CATE_NAME varchar(255),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (QNA_BIG_CATE_ID)
    ) engine=InnoDB;

    create table TB_QNA_SMALL_CATE (
       QNA_SMALL_CATE_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(255),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(255),
        CATE_NAME varchar(255),
        QNA_BIG_CATE_ID bigint,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (QNA_SMALL_CATE_ID)
    ) engine=InnoDB;

    create table TB_REGION (
       REGION_ID bigint not null auto_increment,
        REGION_GROUP varchar(15),
        REGION_NAME varchar(100),
        primary key (REGION_ID)
    ) engine=InnoDB;

    create table TB_SCHEDULE_JOB (
       SCHEDULE_JOB_ID varchar(50) not null,
        JOB_NAME varchar(200),
        CHG_DT datetime,
        CHG_IP varchar(15),
        RUN_YN bit,
        CHG_ID bigint,
        primary key (SCHEDULE_JOB_ID)
    ) engine=InnoDB;

    create table TB_SCHEDULE_JOB_LOG (
       SCHEDULE_LOG_ID bigint not null auto_increment,
        ERROR_DETAIL longtext,
        ERROR_TITLE longtext,
        JOB_LOG_TYPE varchar(5),
        JOB_NAME varchar(100),
        LOG_DT datetime,
        SCHEDULE_JOB_ID varchar(50),
        primary key (SCHEDULE_LOG_ID)
    ) engine=InnoDB;

    create table TB_SHARING (
       SHARING_ID bigint not null auto_increment,
        CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        EXPERIENCE_SHARE_PERSONELL integer,
        LIKE_CNT bigint,
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        REGION_SUM varchar(150),
        REPRESENT_IMG longtext,
        SHARE_PRICE bigint,
        SHARING_COMPLETE_DATE datetime,
        SHARING_PROGRESS_TYPE varchar(255),
        SHARING_TYPE varchar(10),
        STATUS varchar(10),
        TITLE varchar(300),
        VIEW_CNT bigint,
        REG_ID bigint,
        CHG_ID bigint,
        REGION_ID bigint,
        SHARING_EXPERIENCE_TYPE_ID integer,
        SHARING_GOODS_TYPE_ID integer,
        SHARING_HOBBY_TYPE_ID integer,
        primary key (SHARING_ID)
    ) engine=InnoDB;

    create table TB_SHARING_EXPERIENCE_TYPE (
       SHARING_EXPERIENCE_TYPE_ID integer not null auto_increment,
        TYPE_NAME varchar(255),
        primary key (SHARING_EXPERIENCE_TYPE_ID)
    ) engine=InnoDB;

    create table TB_SHARING_GOODS_TYPE (
       SHARING_GOODS_TYPE_ID integer not null auto_increment,
        TYPE_NAME varchar(255),
        primary key (SHARING_GOODS_TYPE_ID)
    ) engine=InnoDB;

    create table TB_SHARING_HOBBY_TYPE (
       SHARING_HOBBY_TYPE_ID integer not null auto_increment,
        TYPE_NAME varchar(255),
        primary key (SHARING_HOBBY_TYPE_ID)
    ) engine=InnoDB;

    create table TB_SHARING_LIKE (
       SHARING_ID bigint not null,
        USER_ID bigint not null,
        REG_DT datetime,
        REG_IP varchar(255),
        primary key (SHARING_ID, USER_ID)
    ) engine=InnoDB;

    create table TB_SHARING_REPORT (
       SHARING_REPORT_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        REPORT_ETC longtext,
        REG_ID bigint,
        CHG_ID bigint,
        REPORT_TARGET_USERID bigint,
        SHARING_ID bigint,
        SHARING_REPORT_TYPE_ID integer,
        primary key (SHARING_REPORT_ID)
    ) engine=InnoDB;

    create table TB_SHARING_REPORT_TYPE (
       SHARING_REPORT_TYPE_ID integer not null auto_increment,
        REPORT_CONTENT longtext,
        primary key (SHARING_REPORT_TYPE_ID)
    ) engine=InnoDB;

    create table TB_SHARING_SELECT_USER (
       SHARING_SELECT_USER_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        RATING integer,
        RATING_DATE datetime,
        REASON varchar(1000),
        SELECT_DATE datetime,
        STATUS varchar(255),
        REG_ID bigint,
        SELECT_USER_ID bigint,
        SHARING_ID bigint,
        primary key (SHARING_SELECT_USER_ID)
    ) engine=InnoDB;

    create table TB_SITE_CONFIG (
       SITE_CONFIG_ID integer not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        DESIGN_TEMPLATE varchar(200),
        EMAIL_YN bit,
        ERROR_NOTI_YN bit,
        FACEBOOK_APP_ID varchar(100),
        FACEBOOK_APP_SECRET_CODE varchar(100),
        GOOGLE_ANALYTICS_ID varchar(100),
        GITHUB_CLIENT_ID varchar(100),
        GITHUB_CLIENT_SECRET varchar(100),
        GOOGLE_CLIENT_ID varchar(100),
        GOOGLE_CLIENT_SECRET varchar(100),
        GOOGLE_SITE_VERIFICATION varchar(100),
        KAKAO_JAVASCRIPT_KEY varchar(100),
        KAKAO_RESTAPI_KEY varchar(100),
        CHG_DT datetime,
        CHG_IP varchar(15),
        NAVER_CLIENT_ID varchar(100),
        NAVER_CLIENT_SECRET varchar(100),
        NAVER_SITE_VERIFICATION varchar(100),
        NOTI_SLACK_CHANNEL_NAME varchar(300),
        RECAPTCHA_V3_SCORE double precision,
        RECAPTCHA_V2_CLIENT varchar(100),
        RECAPTCHA_V2_SERVER varchar(100),
        RECAPTCHA_V3_CLIENT varchar(100),
        RECAPTCHA_V3_SERVER varchar(100),
        REPRESENT_ADDRESS varchar(300),
        REPRESENT_EMAIL varchar(200),
        REPRESENT_FACEBOOK varchar(300),
        REPRESENT_FAX varchar(30),
        REPRESENT_INSTAGRAM varchar(300),
        REPRESENT_KAKAO varchar(300),
        REPRESENT_NAVER varchar(300),
        REPRESENT_PHONE varchar(30),
        REPRESENT_TWITTER varchar(300),
        REPRESENT_YOUTUBE varchar(300),
        SEO_SITE_COPYRIGHT varchar(300),
        SEO_SITE_DESC longtext,
        SEO_SITE_KEYWORDS varchar(300),
        SITE_NAME varchar(200),
        SEO_SITE_SUBJECT varchar(300),
        SLACK_BOT_OAUTH_TOKEN varchar(100),
        SLEEP_USER_INSTANT_DESTROY_YN bit,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (SITE_CONFIG_ID)
    ) engine=InnoDB;

    create table TB_SPACE (
       SPACE_ID bigint not null auto_increment,
        APPROVAL_DATE datetime,
        ATTENDANCE integer,
        CANCEL_DATE datetime,
        REG_DT datetime,
        REG_IP varchar(15),
        EMAIL varchar(300),
        END_TIME time,
        MEETING_CONTENT longtext,
        MEETING_DATE date,
        MEETING_NAME varchar(200),
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        PHONE_NO varchar(200),
        SPACE_TYPE varchar(10),
        START_TIME time,
        STATUS varchar(10),
        USER_NAME varchar(200),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (SPACE_ID)
    ) engine=InnoDB;

    create table TB_TAG (
       TAG_ID bigint not null auto_increment,
        TAG_NAME varchar(100),
        primary key (TAG_ID)
    ) engine=InnoDB;

    create table TB_TAG_RELATION (
       OBJECT_ID bigint not null,
        TAG_ID bigint not null,
        TAG_TYPE varchar(50) not null,
        primary key (OBJECT_ID, TAG_ID, TAG_TYPE)
    ) engine=InnoDB;

    create table TB_TEACHER (
       TEACHER_ID bigint not null auto_increment,
        BELONG varchar(100),
        BLOG varchar(300),
        REG_DT datetime,
        REG_IP varchar(15),
        EMAIL varchar(100),
        FACEBOOK varchar(300),
        TEACHER_FEE varchar(300),
        INSTAGRAM varchar(300),
        INTRODUCTION longtext,
        MENU_UID varchar(50),
        CHG_DT datetime,
        CHG_IP varchar(15),
        NAME varchar(100),
        PHONE_NO varchar(15),
        PHOTO varchar(200),
        REPRESENT_LECTURE varchar(300),
        STATUS varchar(10),
        YOUTUBE varchar(300),
        REG_ID bigint,
        CHG_ID bigint,
        PLAN_FILE_ID bigint,
        RESUME_FILE_ID bigint,
        primary key (TEACHER_ID)
    ) engine=InnoDB;

    create table TB_TERM (
       TERM_ID bigint not null auto_increment,
        CONTENT longtext,
        REG_DT datetime,
        REG_IP varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        NOW_YN bit,
        PUBLISH_DT datetime,
        STATUS varchar(10),
        REG_ID bigint,
        CHG_ID bigint,
        TERM_CTGRY_ID bigint,
        primary key (TERM_ID)
    ) engine=InnoDB;

    create table TB_TERM_AGREE (
       TERM_ID bigint not null,
        USER_ID bigint not null,
        AGREE varchar(10),
        REG_DT datetime,
        REG_IP varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (TERM_ID, USER_ID)
    ) engine=InnoDB;

    create table TB_TERM_AGREE_HISTORY (
       TERM_AGREE_HISTORY_ID bigint not null auto_increment,
        AGREE varchar(10),
        REG_DT datetime,
        REG_IP varchar(15),
        TERM_ID bigint,
        USER_ID bigint,
        primary key (TERM_AGREE_HISTORY_ID)
    ) engine=InnoDB;

    create table TB_TERM_CTGRY (
       TERM_CTGRY_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        DISPLAY_METHOD varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        REQUIRED_YN bit,
        STATUS varchar(10),
        TERM_CTGRY_ORDER integer,
        TITLE varchar(300),
        USER_REQUIRED_YN bit,
        REG_ID bigint,
        CHG_ID bigint,
        primary key (TERM_CTGRY_ID)
    ) engine=InnoDB;

    create table TB_USER (
       USER_ID bigint not null auto_increment,
        ADDRESS1 varchar(400),
        ADDRESS2 varchar(400),
        BIRTHDAY varchar(40),
        REG_DT datetime,
        REG_IP varchar(15),
        EMAIL varchar(300),
        FACEBOOK_CODE varchar(100),
        GITHUB_CODE varchar(100),
        GOOGLE_CODE varchar(100),
        USER_IMAGE varchar(300),
        KAKAO_CODE varchar(100),
        LOGIN_DT datetime,
        LOGIN_ID varchar(100),
        CHG_DT datetime,
        USER_NAME varchar(100),
        NAVER_CODE varchar(100),
        USER_NICK varchar(100),
        PASSWD varchar(128),
        PASSWD_CHG_DT datetime,
        PASSWD_FAIL_CNT integer,
        PHONE varchar(100),
        POST_CODE varchar(12),
        USER_STATUS char(1),
        ROLE_ID bigint,
        primary key (USER_ID)
    ) engine=InnoDB;

    create table TB_USER_DEACTI_NOTIF (
       NOTIF_ID bigint not null auto_increment,
        REG_DT datetime,
        LOGIN_DT datetime,
        REASON_ID bigint,
        USER_ID bigint,
        primary key (NOTIF_ID)
    ) engine=InnoDB;

    create table TB_USER_DEACTIVATE (
       USER_ID bigint not null,
        ADDRESS1 varchar(400),
        ADDRESS2 varchar(400),
        BIRTHDAY varchar(40),
        REG_DT datetime,
        REG_IP varchar(15),
        EMAIL varchar(300),
        FACEBOOK_CODE varchar(100),
        GITHUB_CODE varchar(100),
        GOOGLE_CODE varchar(100),
        USER_IMAGE varchar(300),
        KAKAO_CODE varchar(100),
        LOGIN_DT datetime,
        LOGIN_ID varchar(100),
        CHG_DT datetime,
        USER_NAME varchar(100),
        NAVER_CODE varchar(100),
        USER_NICK varchar(100),
        PASSWD varchar(128),
        PASSWD_CHG_DT datetime,
        PASSWD_FAIL_CNT integer,
        PHONE varchar(100),
        POST_CODE varchar(12),
        USER_STATUS char(1),
        DEACTIVATE_DT datetime,
        ROLE_ID bigint,
        primary key (USER_ID)
    ) engine=InnoDB;

    create table TB_USER_DESTROY (
       USER_ID bigint not null,
        REG_DT datetime,
        DESTROY_TYPE char(1),
        primary key (USER_ID)
    ) engine=InnoDB;

    create table TB_USER_LOGIN_LOG (
       LOGIN_LOG_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(255),
        LOGIN_LOG_TYPE varchar(10),
        LOGIN_ID varchar(100),
        USER_ID bigint,
        primary key (LOGIN_LOG_ID)
    ) engine=InnoDB;

    create table TB_USER_RESET_PASSWORD_TOKEN (
       USER_RESET_PASSWORD_TOKEN_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        TOKEN varchar(32),
        TARGET_USER_ID bigint,
        primary key (USER_RESET_PASSWORD_TOKEN_ID)
    ) engine=InnoDB;

    create table TB_USER_ROLE (
       ROLE_ID bigint not null auto_increment,
        REG_DT datetime,
        REG_IP varchar(15),
        CHG_DT datetime,
        CHG_IP varchar(15),
        ROLE_NAME varchar(100),
        ROLE_GROUP varchar(300),
        REG_ID bigint,
        CHG_ID bigint,
        primary key (ROLE_ID)
    ) engine=InnoDB;

    create table TB_USER_WITHDRAWAL (
       USER_ID bigint not null,
        ADDRESS1 varchar(400),
        ADDRESS2 varchar(400),
        BIRTHDAY varchar(40),
        REG_DT datetime,
        REG_IP varchar(15),
        EMAIL varchar(300),
        FACEBOOK_CODE varchar(100),
        GITHUB_CODE varchar(100),
        GOOGLE_CODE varchar(100),
        USER_IMAGE varchar(300),
        KAKAO_CODE varchar(100),
        LOGIN_DT datetime,
        LOGIN_ID varchar(100),
        CHG_DT datetime,
        USER_NAME varchar(100),
        NAVER_CODE varchar(100),
        USER_NICK varchar(100),
        PASSWD varchar(128),
        PASSWD_CHG_DT datetime,
        PASSWD_FAIL_CNT integer,
        PHONE varchar(100),
        POST_CODE varchar(12),
        USER_STATUS char(1),
        WITHDRAWAL_DT datetime,
        WITHDRAWAL_REASON varchar(255),
        WITHDRAWAL_TYPE char(1),
        ROLE_ID bigint,
        primary key (USER_ID)
    ) engine=InnoDB;

    alter table TB_ATTACHED_FILE
       add constraint UQ_ATTACHED_FILE__FILE_UUID unique (FILE_UUID);
create index IDX_BOARD__TITLE on TB_BOARD (TITLE);
create index IDX_BOARD__SLUG on TB_BOARD (SLUG);
create index IDX_BOARD__MENU_UID on TB_BOARD (MENU_UID);
create index IDX_BOARD_CTGRY__MENU_UID on TB_BOARD_CTGRY (MENU_UID);
create index IDX_BOARD_CTGRY__STATUS on TB_BOARD_CTGRY (STATUS);
create index IDX_CALENDAR__MENU_UID on TB_CALENDAR (MENU_UID);
create index IDX_CALENDAR__YYYYMM on TB_CALENDAR (YYYYMM);
create index IDX_CALENDAR__START_DATE on TB_CALENDAR (START_DATE);
create index IDX_CALENDAR__END_DATE on TB_CALENDAR (END_DATE);
create index IDX_CALENDAR__SCHEDULE_TYPE on TB_CALENDAR (SCHEDULE_TYPE);
create index IDX_CALENDAR__REPEAT_TYPE on TB_CALENDAR (REPEAT_TYPE);
create index IDX_CALENDAR__RELATE_ID on TB_CALENDAR (RELATE_ID);
create index IDX_CALENDAR__REPEAT_CODE on TB_CALENDAR (REPEAT_CODE);
create index IDX_CALENDAR__STATUS on TB_CALENDAR (STATUS);
create index IDX_CAMPAIGN__CAMPAIGN_NAME on TB_CAMPAIGN (CAMPAIGN_NAME);
create index IDX_CAMPAIGN__MENU_UID on TB_CAMPAIGN (MENU_UID);
create index IDX_CAMPAIGN_CHEER_COMMENT__MENU_UID on TB_CAMPAIGN_CHEER_COMMENT (MENU_UID);
create index IDX_CAMPAIGN_JOIN__MENU_UID on TB_CAMPAIGN_JOIN (MENU_UID);
create index IDX_CHAT_ROOM__NAME on TB_CHAT_ROOM (NAME);
create index IDX_CHAT_ROOM_USER__SESSION_ID on TB_CHAT_ROOM_USER (SESSION_ID);
create index IDX_EVENT__EVENT_TITLE on TB_EVENT (EVENT_TITLE);
create index IDX_EVENT__EVENT_STATUS on TB_EVENT (EVENT_STATUS);
create index IDX_EVENT__MENU_UID on TB_EVENT (MENU_UID);
create index IDX_EVENT_PART__MENU_UID on TB_EVENT_PART (MENU_UID);

    alter table TB_EVENT_PART
       add constraint UQ_EVENT_PART unique (REG_ID, EVENT_ID);
create index IDX_EVENT_PART_COMMENT__MENU_UID on TB_EVENT_PART_COMMENT (MENU_UID);
create index IDX_FAQ__TITLE on TB_FAQ (TITLE);
create index IDX_FAQ__MENU_UID on TB_FAQ (MENU_UID);
create index IDX_FAQCATE__CATE_NAME on TB_FAQ_CATE (CATE_NAME);
create index IDX_FAQCATE__MENU_UID on TB_FAQ_CATE (MENU_UID);
create index IDX_KOTLIN_TEST__TITLE on TB_KOTLIN_TEST (TITLE);
create index IDX_LECTURE__MENU_UID on TB_LECTURE (MENU_UID);
create index IDX_LECTURE__STATUS on TB_LECTURE (STATUS);
create index IDX_LECTURE__RECRUIT_STATUS on TB_LECTURE (RECRUIT_STATUS);
create index IDX_LECTURE__START_DATE on TB_LECTURE (START_DATE);
create index IDX_LECTURE__END_DATE on TB_LECTURE (END_DATE);
create index IDX_LECTURE__START_TIME on TB_LECTURE (START_TIME);
create index IDX_LECTURE__END_TIME on TB_LECTURE (END_TIME);
create index IDX_LECTURE_GROUP__MENU_UID on TB_LECTURE_GROUP (MENU_UID);
create index IDX_LECTURE_GROUP__STATUS on TB_LECTURE_GROUP (STATUS);
create index IDX_LECTURE_GROUP__LECTURE_GROUP_NAME on TB_LECTURE_GROUP (LECTURE_GROUP_NAME);
create index IDX_MENU_INFO__ORDER_SEQ on TB_MENU_INFO (ORDER_SEQ);
create index IDX_MENU_INFO__NAME on TB_MENU_INFO (NAME);

    alter table TB_MENU_INFO
       add constraint UQ_MENU_INFO__FULL_URL unique (FULL_URL);

    alter table TB_MENU_INFO
       add constraint UQ_MENU_INFO__MENU_UID unique (MENU_UID);
create index IDX_ORDER__GOODS_NAME on TB_ORDER (GOODS_NAME);
create index IDX_ORDER__GOODS_TYPE on TB_ORDER (GOODS_TYPE);
create index IDX_ORDER__GOODS_ID on TB_ORDER (GOODS_ID);
create index IDX_ORDER__ORDER_STATUS on TB_ORDER (ORDER_STATUS);
create index IDX_ORDER_CART__GOODS_NAME on TB_ORDER_CART (GOODS_NAME);
create index IDX_ORDER_CART__GOODS_TYPE on TB_ORDER_CART (GOODS_TYPE);
create index IDX_ORDER_CART__GOODS_ID on TB_ORDER_CART (GOODS_ID);
create index IDX_ORDER_CART__STATUS on TB_ORDER_CART (STATUS);
create index IDX_ORDER_INFO__MERCHANT_UID on TB_ORDER_INFO (MERCHANT_UID);
create index IDX_POPUP__POPUP_ST_DATE on TB_POPUP (POPUP_ST_DATE);
create index IDX_POPUP__POPUP_ED_DATE on TB_POPUP (POPUP_ED_DATE);
create index IDX_POPUP__POPUP_STATUS on TB_POPUP (STATUS);
create index IDX_POPUP__MENU_UID on TB_POPUP (MENU_UID);
create index IDX_QNA__QUESTION_NAME on TB_QNA (QUESTION_NAME);
create index IDX_QNA__MENU_UID on TB_QNA (MENU_UID);
create index IDX_QNA__QNA_STATUS on TB_QNA (QNA_STATUS);
create index IDX_REGION__REGION_GROUP on TB_REGION (REGION_GROUP);
create index IDX_SHARING__TITLE on TB_SHARING (TITLE);
create index IDX_SHARING__MENU_UID on TB_SHARING (MENU_UID);
create index IDX_SPACE__MEETING_DATE on TB_SPACE (MEETING_DATE);
create index IDX_SPACE__STATUS on TB_SPACE (STATUS);
create index IDX_SPACE__MENU_UID on TB_SPACE (MENU_UID);
create index IDX_TEACHER__MENU_UID on TB_TEACHER (MENU_UID);
create index IDX_TEACHER__NAME on TB_TEACHER (NAME);
create index IDX_TEACHER__STATUS on TB_TEACHER (STATUS);
create index IDX_TERM__PUBLISH_DT on TB_TERM (PUBLISH_DT);
create index IDX_TERM__STATUS on TB_TERM (STATUS);
create index IDX_USER__PHONE on TB_USER (PHONE);
create index IDX_USER__USER_NAME on TB_USER (USER_NAME);
create index IDX_USER__USER_STATUS on TB_USER (USER_STATUS);

    alter table TB_USER
       add constraint UQ_USER__LOGIN_ID unique (LOGIN_ID);

    alter table TB_USER
       add constraint UQ_USER__NAVER_CODE unique (NAVER_CODE);

    alter table TB_USER
       add constraint UQ_USER__FACEBOOK_CODE unique (FACEBOOK_CODE);

    alter table TB_USER
       add constraint UQ_USER__KAKAO_CODE unique (KAKAO_CODE);

    alter table TB_USER
       add constraint UQ_USER__GOOGLE_CODE unique (GOOGLE_CODE);

    alter table TB_USER
       add constraint UQ_USER__GITHUB_CODE unique (GITHUB_CODE);

    alter table TB_USER
       add constraint UQ_USER__EMAIL unique (EMAIL);

    alter table TB_USER
       add constraint UQ_USER__USER_NICK unique (USER_NICK);
create index IDX_USER_DEACTIVATE__LOGIN_ID on TB_USER_DEACTIVATE (LOGIN_ID);
create index IDX_USER_LOGIN_LOG__LOGIN_LOG_TYPE on TB_USER_LOGIN_LOG (LOGIN_LOG_TYPE);
create index IDX_USER_LOGIN_LOG__REG_DT on TB_USER_LOGIN_LOG (REG_DT);
create index IDX_USER_LOGIN_LOG__REG_IP on TB_USER_LOGIN_LOG (REG_IP);

    alter table TB_USER_RESET_PASSWORD_TOKEN
       add constraint UQ_USER_RESET_PASSWORD_TOKEN__TOKEN unique (TOKEN);
create index IDX_TB_USER_WITHDRAWAL__LOGIN_ID on TB_USER_WITHDRAWAL (LOGIN_ID);

    alter table TB_ATTACHED_FILE
       add constraint FK_ATTACHEDFILE_TO_USER
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_BOARD
       add constraint FK_BOARD_TO_USER
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_BOARD
       add constraint FK_BOARD_TO_BOARD_CATE
       foreign key (CATE_ID)
       references TB_BOARD_CTGRY (BOARD_CTGRY_ID);

    alter table TB_BOARD
       add constraint FK_BOARD_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_BOARD_CTGRY
       add constraint FK_BOARD_CTGRY_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_BOARD_CTGRY
       add constraint FK_BOARD_CTGRY_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_BOARD_LIKE
       add constraint FK_BOARDLIKE_TO_BOARD
       foreign key (BOARD_ID)
       references TB_BOARD (BOARD_ID);

    alter table TB_BOARD_LIKE
       add constraint FK_BOARDLIKE_TO_USER
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_CALENDAR
       add constraint FK_CALENDAR_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_CALENDAR
       add constraint FK_CALENDAR_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN
       add constraint FK_CAMPAIGN_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN
       add constraint FK_CAMPAIGN_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN_BLACK_USER
       add constraint FK_CAMPAIGN_BLACK_TO_CAMPAIGN
       foreign key (CAMPAIGN_ID)
       references TB_CAMPAIGN (CAMPAIGN_ID);

    alter table TB_CAMPAIGN_BLACK_USER
       add constraint FK_CAMPAIGN_BLACK_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN_BLACK_USER
       add constraint FK_CAMPAIGN_BLACK_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN_BLACK_USER
       add constraint FK_CAMPAIGN_BLACK_TO_USER3
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN_CHEER_COMMENT
       add constraint FK_CAMPAIGN_CHEER_COMMENT_TO_CAMPAIGN
       foreign key (CAMPAIGN_ID)
       references TB_CAMPAIGN (CAMPAIGN_ID);

    alter table TB_CAMPAIGN_CHEER_COMMENT
       add constraint FK_CAMPAIGN_CHEER_COMMENT_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN_CHEER_COMMENT
       add constraint FK_CAMPAIGN_CHEER_COMMENT_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN_JOIN
       add constraint FK_CAMPAIGN_JOIN_TO_CAMPAIGN
       foreign key (CAMPAIGN_ID)
       references TB_CAMPAIGN (CAMPAIGN_ID);

    alter table TB_CAMPAIGN_JOIN
       add constraint FK_CAMPAIGN_JOIN_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_CAMPAIGN_JOIN
       add constraint FK_CAMPAIGN_JOIN_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_CHAT_MESSAGE
       add constraint FK_CHAT_MESSAGE_TO_CHAT_ROOM
       foreign key (CHAT_ROOM_ID)
       references TB_CHAT_ROOM (CHAT_ROOM_ID);

    alter table TB_CHAT_MESSAGE
       add constraint FK_CHAT_MESSAGE_TO_USER
       foreign key (SENDER)
       references TB_USER (USER_ID);

    alter table TB_CHAT_ROOM_USER
       add constraint FK_CHAT_ROOM_USER_TO_CHATROOM
       foreign key (CHAT_ROOM_ID)
       references TB_CHAT_ROOM (CHAT_ROOM_ID);

    alter table TB_CHAT_ROOM_USER
       add constraint FK_CHAT_ROOM_USER_TO_USER
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_COMMENT
       add constraint FK_COMMENT_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_COMMENT
       add constraint FK_COMMENT_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_COMMENT
       add constraint FK_COMMENT_TO_COMMENT
       foreign key (PARENT_ID)
       references TB_COMMENT (COMMENT_ID);

    alter table TB_EVENT
       add constraint FK_EVENT_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_EVENT
       add constraint FK_EVENT_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_EVENT_LIKE
       add constraint FK_EVENT_LIKE_TO_EVENT
       foreign key (EVENT_ID)
       references TB_EVENT (EVENT_ID);

    alter table TB_EVENT_LIKE
       add constraint FK_EVENT_LIKE_TO_USER1
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_EVENT_PART
       add constraint FK_EVENT_PART_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_EVENT_PART
       add constraint FK_EVENT_PART_TO_EVENT
       foreign key (EVENT_ID)
       references TB_EVENT (EVENT_ID);

    alter table TB_EVENT_PART
       add constraint FK_EVENT_PART_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_EVENT_PART_COMMENT
       add constraint FK_EVENT_PART_COMMENT_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_EVENT_PART_COMMENT
       add constraint FK_EVENT_PART_COMMENT_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_EVENT_PART_COMMENT
       add constraint FK_EVENT_PART_COMMENT_TO_EVENT_PART
       foreign key (PART_ID)
       references TB_EVENT_PART (PART_ID);

    alter table TB_FAQ
       add constraint FK_FAQ_TO_FAQ_CATE
       foreign key (CATE_ID)
       references TB_FAQ_CATE (CATE_ID);

    alter table TB_FAQ
       add constraint FK_FAQ_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_FAQ
       add constraint FK_FAQ_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_FAQ_CATE
       add constraint FK_FAQ_CATE_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_FAQ_CATE
       add constraint FK_FAQ_CATE_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_HISTORY
       add constraint FK_HISTORY_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_HISTORY
       add constraint FK_HISTORY_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_KOTLIN_TEST
       add constraint FK_KOTLIN_TEST_TO_USER
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_KOTLIN_TEST
       add constraint FK_KOTLIN_TEST_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_LECTURE
       add constraint FK_LECTURE_TO_USER
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_LECTURE
       add constraint FK_LECTURE_TO_LECTURE_GROUP
       foreign key (LECTURE_GROUP_ID)
       references TB_LECTURE_GROUP (LECTURE_GROUP_ID);

    alter table TB_LECTURE
       add constraint FK_LECTURE_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_LECTURE
       add constraint FK_LECTURE_TO_TEACHER
       foreign key (TEACHER_ID)
       references TB_TEACHER (TEACHER_ID);

    alter table TB_MENU_INFO
       add constraint FK_MENU_INFO_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_MENU_INFO
       add constraint FK_MENU_INFO_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER
       add constraint FK_ORDER_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER
       add constraint FK_ORDER_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER
       add constraint FK_ORDER_TO_ORDER_INFO
       foreign key (ORDER_INFO_ID)
       references TB_ORDER_INFO (ORDER_INFO_ID);

    alter table TB_ORDER
       add constraint FK_ORDER_TO_USER3
       foreign key (ORDER_USER_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER_CART
       add constraint FK_ORDER_CART_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER_CART
       add constraint FK_LECTURE_CART_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER_CART
       add constraint FK_ORDER_CART_TO_USER3
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER_INFO
       add constraint FK_ORDER_INFO_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER_LOG
       add constraint FK_ORDER_LOG_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_ORDER_LOG
       add constraint FK_ORDER_LOG_TO_USER2
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_POPUP
       add constraint FK_POPUP_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_POPUP
       add constraint FK_POPUP_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_QNA
       add constraint FK_QNA_TO_USER2
       foreign key (ANSWER_ID)
       references TB_USER (USER_ID);

    alter table TB_QNA
       add constraint FK_QNA_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_QNA
       add constraint FK_QNA_TO_QNA_BIGCATE
       foreign key (QNA_BIG_CATE_ID)
       references TB_QNA_BIG_CATE (QNA_BIG_CATE_ID);

    alter table TB_QNA
       add constraint FK_QNA_TO_QNA_SMALLCATE
       foreign key (QNA_SMALL_CATE_ID)
       references TB_QNA_SMALL_CATE (QNA_SMALL_CATE_ID);

    alter table TB_QNA_BIG_CATE
       add constraint FK_QNA_BIGCATE_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_QNA_BIG_CATE
       add constraint FK_QNA_BIGCATE_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_QNA_SMALL_CATE
       add constraint FK_QNA_SMALLCATE_TO_BIGCATE
       foreign key (QNA_BIG_CATE_ID)
       references TB_QNA_BIG_CATE (QNA_BIG_CATE_ID);

    alter table TB_QNA_SMALL_CATE
       add constraint FK_QNA_SMALLCATE_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_QNA_SMALL_CATE
       add constraint FK_QNA_SMALLCATE_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_SCHEDULE_JOB
       add constraint FK_SCHEDULE_JOB_TO_USER1
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_SCHEDULE_JOB_LOG
       add constraint FK_SCHEDULE_JOB_LOG_TO_SCHEDULE
       foreign key (SCHEDULE_JOB_ID)
       references TB_SCHEDULE_JOB (SCHEDULE_JOB_ID);

    alter table TB_SHARING
       add constraint FK_SHARING_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_SHARING
       add constraint FK_SHARING_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_SHARING
       add constraint FK_SHARING_TO_REGION
       foreign key (REGION_ID)
       references TB_REGION (REGION_ID);

    alter table TB_SHARING
       add constraint FK_SHARING_TO_SHARING_EXPERIENCE_TYPE
       foreign key (SHARING_EXPERIENCE_TYPE_ID)
       references TB_SHARING_EXPERIENCE_TYPE (SHARING_EXPERIENCE_TYPE_ID);

    alter table TB_SHARING
       add constraint FK_SHARING_TO_SHARING_GOODS_TYPE
       foreign key (SHARING_GOODS_TYPE_ID)
       references TB_SHARING_GOODS_TYPE (SHARING_GOODS_TYPE_ID);

    alter table TB_SHARING
       add constraint FK_SHARING_TO_SHARING_HOBBY_TYPE
       foreign key (SHARING_HOBBY_TYPE_ID)
       references TB_SHARING_HOBBY_TYPE (SHARING_HOBBY_TYPE_ID);

    alter table TB_SHARING_LIKE
       add constraint FK_SHARING_LIKE_TO_SHARING
       foreign key (SHARING_ID)
       references TB_SHARING (SHARING_ID);

    alter table TB_SHARING_LIKE
       add constraint FK_SHARING_LIKE_TO_USER1
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_SHARING_REPORT
       add constraint FK_SHARING_REPORT_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_SHARING_REPORT
       add constraint FK_SHARING_REPORT_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_SHARING_REPORT
       add constraint FK_SHARING_REPORT_TO_USER3
       foreign key (REPORT_TARGET_USERID)
       references TB_USER (USER_ID);

    alter table TB_SHARING_REPORT
       add constraint FK_SHARING_REPORT_TO_SHARING
       foreign key (SHARING_ID)
       references TB_SHARING (SHARING_ID);

    alter table TB_SHARING_REPORT
       add constraint FK_SHARING_REPORT_TO_SHARING_REPORT_TYPE
       foreign key (SHARING_REPORT_TYPE_ID)
       references TB_SHARING_REPORT_TYPE (SHARING_REPORT_TYPE_ID);

    alter table TB_SHARING_SELECT_USER
       add constraint FK_SHARING_SELECT_USER_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_SHARING_SELECT_USER
       add constraint FK_SHARING_SELECT_USER_TO_USER2
       foreign key (SELECT_USER_ID)
       references TB_USER (USER_ID);

    alter table TB_SHARING_SELECT_USER
       add constraint FK_SHARING_SELECT_USER_TO_SHARING
       foreign key (SHARING_ID)
       references TB_SHARING (SHARING_ID);

    alter table TB_SITE_CONFIG
       add constraint FK_SITE_CONFIG_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_SITE_CONFIG
       add constraint FK_SITE_CONFIG_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_SPACE
       add constraint FK_SPACE_TO_USER
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_SPACE
       add constraint FK_SPACE_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_TAG_RELATION
       add constraint FK_TAG_RELATION_TO_TAG
       foreign key (TAG_ID)
       references TB_TAG (TAG_ID);

    alter table TB_TEACHER
       add constraint FK_TEACHER_TO_USER
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_TEACHER
       add constraint FK_TEACHER_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_TEACHER
       add constraint FK_TEACHER_TO_ATTACH_FILE2
       foreign key (PLAN_FILE_ID)
       references TB_ATTACHED_FILE (ATTACHED_FILE_ID);

    alter table TB_TEACHER
       add constraint FK_TEACHER_TO_ATTACH_FILE1
       foreign key (RESUME_FILE_ID)
       references TB_ATTACHED_FILE (ATTACHED_FILE_ID);

    alter table TB_TERM
       add constraint FK_TERM_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_TERM
       add constraint FK_TERM_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_TERM
       add constraint FK_TERM_TO_TERM_CATEGORY
       foreign key (TERM_CTGRY_ID)
       references TB_TERM_CTGRY (TERM_CTGRY_ID);

    alter table TB_TERM_AGREE
       add constraint FK_TERM_AGREE_TO_TERM
       foreign key (TERM_ID)
       references TB_TERM (TERM_ID);

    alter table TB_TERM_AGREE
       add constraint FK_TERM_AGREE_TO_USER1
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_TERM_AGREE
       add constraint FK_TERM_AGREE_TO_USER2
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_TERM_AGREE
       add constraint FK_TERM_AGREE_TO_USER3
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_TERM_AGREE_HISTORY
       add constraint FK_TERM_AGREE_HISTORY_TO_TERM
       foreign key (TERM_ID)
       references TB_TERM (TERM_ID);

    alter table TB_TERM_AGREE_HISTORY
       add constraint FK_TERM_AGREE_HISTORY_TO_USER3
       foreign key (USER_ID)
       references TB_USER (USER_ID);

    alter table TB_TERM_CTGRY
       add constraint FK_TERM_CTGRY_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_TERM_CTGRY
       add constraint FK_TERM_CTGRY_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_USER
       add constraint FK_USER_TO_USER_ROLE
       foreign key (ROLE_ID)
       references TB_USER_ROLE (ROLE_ID);

    alter table TB_USER_DEACTIVATE
       add constraint FK_USER_DEACTIVATE_TO_USER_ROLE
       foreign key (ROLE_ID)
       references TB_USER_ROLE (ROLE_ID);

    alter table TB_USER_RESET_PASSWORD_TOKEN
       add constraint FK_USER_RESET_PASSWORD_TOKEN_TO_USER
       foreign key (TARGET_USER_ID)
       references TB_USER (USER_ID);

    alter table TB_USER_ROLE
       add constraint FK_USER_ROLE_TO_USER1
       foreign key (REG_ID)
       references TB_USER (USER_ID);

    alter table TB_USER_ROLE
       add constraint FK_USER_ROLE_TO_USER2
       foreign key (CHG_ID)
       references TB_USER (USER_ID);

    alter table TB_USER_WITHDRAWAL
       add constraint FK_USER_WITHDRAWAL_TO_USER_ROLE
       foreign key (ROLE_ID)
       references TB_USER_ROLE (ROLE_ID);
