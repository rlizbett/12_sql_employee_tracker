DROP DATABASE IF EXISTS managment_db;
CREATE DATABASE managment_db;
USE managment_db;

CREATE TABLE department(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    name: VARCHAR(30)
);

CREATE TABLE role(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    name: VARCHAR(30)
);

CREATE TABLE employee(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    name: VARCHAR(30)
);