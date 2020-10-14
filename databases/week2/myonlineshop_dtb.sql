DROP DATABASE IF EXISTS  myonlineshop;
CREATE DATABASE myonlineshop;
USE myonlineshop;

DROP TABLE IF EXISTS `Product`;
CREATE TABLE Product (
    ProId int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Price int(255) NOT NULL,
    Size enum('x-small','small','x-large') DEFAULT NULL,
    PRIMARY KEY (`ProId`)
);
INSERT INTO myonlineshop.Product (ProId, Name, Price, Size) VALUES ('1', 'Shirt', '100', 'small');
INSERT INTO myonlineshop.Product (ProId, Name, Price, Size) VALUES ('2', 'Shoe', '200', 'x-small');
DROP TABLE IF EXISTS `Customers`;
CREATE TABLE Customers (
    Customer_ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Phone int(255) NOT NULL,
    City enum('Copenhagen','Odense','Alborg') DEFAULT NULL,
    PRIMARY KEY (`Customer_ID`)
);
INSERT INTO myonlineshop.Customers (Customer_ID, Name, Phone, City) VALUES ('1', 'Jack', '947586326', 'Copenhagen');
INSERT INTO myonlineshop.Customers (Customer_ID, Name, Phone, City) VALUES ('2', 'Mark', '947586326', 'Odense');
DROP TABLE IF EXISTS `Orders`;
CREATE TABLE Orders (
	Orders_ID int NOT NULL AUTO_INCREMENT,
    Customer_ID int NOT NULL,
    Order_date DATETIME NOT NULL,
    status char(2) NOT NULL,
    PRIMARY KEY (`Orders_ID`)
);
INSERT INTO myonlineshop.Orders (Orders_ID, Customer_ID, Order_date,status) VALUES ('1', '1', '2020-10-1', '0');
UPDATE Customers
SET Name = 'Alfred Schmidt', City= 'Alborg'
WHERE Customer_ID = 1;