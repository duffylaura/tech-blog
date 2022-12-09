DROP DATABASE IF EXISTS tech_db;

CREATE DATABASE tech_db;

USE tech_db;

CREATE TABLE `User` (
 `id` int AUTO_INCREMENT,
 `username`,
 `email`,
 `password`,
 PRIMARY KEY (`id`)
);

CREATE TABLE `Post` (
 `id` int AUTO_INCREMENT,
 `title`,
 `content`,
PRIMARY KEY (`id`),
FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `Comment` (
  `id` int AUTO_INCREMENT,
  `user_id`,
  `post_id`,
  `content`,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`post_id`) REFERENCES `Post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);