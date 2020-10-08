-- 전체 테이블 초기화
SET FOREIGN_KEY_CHECKS=0;
SET group_concat_max_len = 1000000;

DROP TABLE IF EXISTS slowalk_TMP;
CREATE TABLE slowalk_TMP (ID BIGINT(20) UNSIGNED NOT NULL);

SET @tables = NULL;
SELECT GROUP_CONCAT(table_schema, '.', table_name) INTO @tables
FROM information_schema.tables
WHERE table_schema = DATABASE();

SET @tables = CONCAT('DROP TABLE ', @tables);
PREPARE stmt FROM @tables;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET FOREIGN_KEY_CHECKS=1;
