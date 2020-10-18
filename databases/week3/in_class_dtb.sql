DROP DATABASE IF EXISTS  dtb_week3;
CREATE DATABASE dtb_week3;
USE dtb_week3;

DROP TABLE IF EXISTS `Log_in_data`;
CREATE TABLE `Log_in_data` (
    UserId int NOT NULL AUTO_INCREMENT,
    Name varchar(50) NOT NULL,
    Password varchar(50) NOT NULL,
    Email varchar(50) NOT NULL,
    Phone varchar(50),
    PRIMARY KEY (`UserId`)
);
INSERT INTO dtb_week3.Log_in_data (UserId, Name, Password, Email, Phone) VALUES ('1', 'ember', '123456', 'ipoljupci@gmail.com', '60515274');
INSERT INTO dtb_week3.Log_in_data  (UserId, Name, Password, Email, Phone) VALUES ('2', 'Valentina', '200000', 'vmendez@gmail.com', '60503070');
-- SQL injection
USE dtb_week3;
SELECT * FROM `Log_in_data`
WHERE name = 'ember' AND password = "26373674637 or "=""

USE dtb_week3;
SELECT * FROM `Log_in_data`
WHERE name = 'ember' AND password = "'' or "=""
