-- SQL script to initialize the guestbook database schema

CREATE DATABASE IF NOT EXISTS guestbook;
USE guestbook;

CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message TEXT NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
