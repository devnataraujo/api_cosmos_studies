CREATE DATABASE COSMOS;
USE COSMOS;

CREATE TABLE USER_PROFILE(
	USER_ID INT PRIMARY KEY AUTO_INCREMENT,
	USER_NICKNAME VARCHAR(100) NOT NULL,
    USER_EMAIL VARCHAR(100) NOT NULL UNIQUE,
    USER_PASSWORD VARCHAR(100) NOT NULL,
    USER_COUNTRY VARCHAR(100) NOT NULL,
    USER_BIRTH DATE NOT NULL
)
