/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : photo

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-08-13 17:10:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `admin_name` varchar(32) COLLATE utf8_bin NOT NULL COMMENT '管理员名',
  `password` varchar(32) COLLATE utf8_bin NOT NULL COMMENT '密码',
  `insert_time` datetime NOT NULL COMMENT '插入时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'root1', '21218cca77804d2ba1922c33e0151105', '2018-07-12 14:27:44', '2018-07-11 15:49:54');
INSERT INTO `admin` VALUES ('2', 'admin', '21218cca77804d2ba1922c33e0151105', '2018-07-12 10:54:31', '2018-07-12 10:54:27');
INSERT INTO `admin` VALUES ('3', 'sroot', '21218cca77804d2ba1922c33e0151105', '2018-07-12 14:23:53', '2018-07-12 14:23:53');
INSERT INTO `admin` VALUES ('4', 'zhao', '21218cca77804d2ba1922c33e0151105', '2018-07-12 14:25:33', '2018-07-12 14:25:33');
INSERT INTO `admin` VALUES ('5', 'root2', '21218cca77804d2ba1922c33e0151105', '2018-07-12 14:28:05', '2018-07-12 14:28:05');
INSERT INTO `admin` VALUES ('6', 'root2', '96e79218965eb72c92a549dd5a330112', '0000-00-00 00:00:00', '2018-07-13 16:22:10');
INSERT INTO `admin` VALUES ('7', 'root3', 'e3ceb5881a0a1fdaad01296d7554868d', '0000-00-00 00:00:00', '2018-07-13 16:22:18');

-- ----------------------------
-- Table structure for `album`
-- ----------------------------
DROP TABLE IF EXISTS `album`;
CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `album_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '相册名称',
  `album_image` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '相册封面',
  `album_introduce` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '相册简介',
  `insert_time` datetime DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='相册表';

-- ----------------------------
-- Records of album
-- ----------------------------

-- ----------------------------
-- Table structure for `photo`
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `photo_url` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '照片链接',
  `sort` int(11) DEFAULT NULL COMMENT '排序（数值越大越靠前）',
  `insert_time` datetime DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='照片表';

-- ----------------------------
-- Records of photo
-- ----------------------------

-- ----------------------------
-- Table structure for `photo_album_relation`
-- ----------------------------
DROP TABLE IF EXISTS `photo_album_relation`;
CREATE TABLE `photo_album_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `photo_id` int(11) DEFAULT NULL COMMENT '照片id',
  `album_id` int(11) DEFAULT NULL COMMENT '相册id',
  `insert_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of photo_album_relation
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `User_id` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) NOT NULL,
  `Pwd` char(32) NOT NULL,
  `Face` varchar(60) NOT NULL,
  `User_introduction` varchar(255) NOT NULL,
  `User_tel` varchar(11) NOT NULL,
  `Visit_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'king@qq.com', 'b2086154f101464aab3328ba7e060deb', 'default.jpg', '牛逼', '12345678910', '1530262234');
INSERT INTO `user` VALUES ('2', 'admin', 'admin', 'default.jpg', '牛逼', '12345678910', '1432176033');
INSERT INTO `user` VALUES ('3', 'user', 'user', 'default.jpg', '牛逼', '12345678910', '1432176033');
INSERT INTO `user` VALUES ('4', 'a', 'king', 'default.jpg', '牛逼', '12345678910', '1432176033');
INSERT INTO `user` VALUES ('5', 'b', 'king', 'default.jpg', '牛逼', '12345678910', '1432176033');
INSERT INTO `user` VALUES ('6', 'c', 'king', 'default.jpg', '牛逼', '12345678910', '1432176033');
