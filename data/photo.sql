/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : photo

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-09-17 13:56:03
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
  `sort` int(11) DEFAULT '0' COMMENT '排序（数值越大越靠前）',
  `is_delete` tinyint(2) DEFAULT '0' COMMENT '禁用（0：前台可见1：不可见）',
  `insert_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '插入时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='相册表';

-- ----------------------------
-- Records of album
-- ----------------------------
INSERT INTO `album` VALUES ('1', 'JAPAN11', '2018-08-29/5b86a835903fd.jpg', 'JAPAN11', '2', '0', null, '2018-08-29 22:05:41');
INSERT INTO `album` VALUES ('2', 'AQUARIUM', 'album2.jpg', 'AQUARIUM', '0', '0', null, '2018-08-21 16:58:33');
INSERT INTO `album` VALUES ('3', 'FRIENDS', 'album3.jpg', 'MY FRIENDS', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('4', 'HONGKONG', 'album4.jpg', '带你走进不一样的HONGKONG！', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('5', 'hanna', 'album5.jpg', 'hanna', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('6', 'ZHANGCHEN', 'album6.jpg', 'ZHANGCHEN', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('7', 'FAYE', 'album7.jpg', 'FAYE', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('8', 'JJUN', 'album8.jpg', 'JJUN', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('9', 'JUICY', 'album9.jpg', 'JUICY', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('10', 'HACHI', 'album10.jpg', 'HACHI', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('11', 'YUKI', 'album11.jpg', 'YUKI', '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `album` VALUES ('12', 'aaa', '2018-08-29/5b8588c986b16.jpg', 'aaa', '1', '0', '2018-08-29 00:35:02', '2018-08-29 01:39:21');

-- ----------------------------
-- Table structure for `album_theme_relation`
-- ----------------------------
DROP TABLE IF EXISTS `album_theme_relation`;
CREATE TABLE `album_theme_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `theme_id` int(11) DEFAULT NULL COMMENT '相册id',
  `album_id` int(11) DEFAULT NULL COMMENT '照片id',
  `insert_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '插入时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of album_theme_relation
-- ----------------------------
INSERT INTO `album_theme_relation` VALUES ('2', '1', '2', '2018-08-29 22:27:29');
INSERT INTO `album_theme_relation` VALUES ('3', '1', '3', '2018-08-29 22:27:35');
INSERT INTO `album_theme_relation` VALUES ('5', '1', '5', '2018-08-29 22:27:40');
INSERT INTO `album_theme_relation` VALUES ('6', '1', '1', '2018-09-10 15:49:00');
INSERT INTO `album_theme_relation` VALUES ('7', '2', '2', '2018-09-10 15:49:54');
INSERT INTO `album_theme_relation` VALUES ('8', '2', '3', '2018-09-10 15:49:58');
INSERT INTO `album_theme_relation` VALUES ('9', '1', '11', '2018-09-11 14:14:48');
INSERT INTO `album_theme_relation` VALUES ('10', '1', '12', '2018-09-11 14:14:48');

-- ----------------------------
-- Table structure for `photo`
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `photo_image` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '照片链接',
  `sort` int(11) DEFAULT '0' COMMENT '排序（数值越大越靠前）',
  `is_delete` tinyint(2) DEFAULT '0' COMMENT '禁用（0：前台可见1：不可见）',
  `insert_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '插入时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='照片表';

-- ----------------------------
-- Records of photo
-- ----------------------------
INSERT INTO `photo` VALUES ('1', 'album2.jpg', '0', '0', null, '2018-08-28 16:42:39');
INSERT INTO `photo` VALUES ('2', 'album3.jpg', '0', '0', null, '2018-08-28 16:42:44');
INSERT INTO `photo` VALUES ('3', 'album4.jpg', '0', '0', null, '2018-08-28 16:42:55');
INSERT INTO `photo` VALUES ('4', 'album5.jpg', '0', '0', null, '2018-08-28 16:42:59');
INSERT INTO `photo` VALUES ('5', 'album6.jpg', '0', '0', null, '2018-08-28 16:43:03');
INSERT INTO `photo` VALUES ('6', 'album7.jpg', '0', '0', null, '2018-08-28 16:43:06');
INSERT INTO `photo` VALUES ('7', 'album8.jpg', '0', '0', null, '2018-08-28 16:43:10');
INSERT INTO `photo` VALUES ('8', 'album9.jpg', '0', '0', null, '2018-08-28 16:43:13');
INSERT INTO `photo` VALUES ('9', 'album10.jpg', '0', '0', null, '2018-08-28 16:43:16');
INSERT INTO `photo` VALUES ('10', 'album3.jpg', '0', '0', null, '2018-08-28 16:42:49');
INSERT INTO `photo` VALUES ('12', '2018-08-29/5b858a139c809.jpg', '0', '0', '2018-08-29 01:44:51', null);

-- ----------------------------
-- Table structure for `photo_album_relation`
-- ----------------------------
DROP TABLE IF EXISTS `photo_album_relation`;
CREATE TABLE `photo_album_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `album_id` int(11) DEFAULT NULL COMMENT '相册id',
  `photo_id` int(11) DEFAULT NULL COMMENT '照片id',
  `insert_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '插入时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of photo_album_relation
-- ----------------------------
INSERT INTO `photo_album_relation` VALUES ('2', '1', '2', '2018-08-29 22:27:29');
INSERT INTO `photo_album_relation` VALUES ('3', '1', '3', '2018-08-29 22:27:35');
INSERT INTO `photo_album_relation` VALUES ('5', '1', '5', '2018-08-29 22:27:40');
INSERT INTO `photo_album_relation` VALUES ('6', '2', '2', '2018-09-10 15:48:15');
INSERT INTO `photo_album_relation` VALUES ('7', '2', '3', '2018-09-10 15:48:19');
INSERT INTO `photo_album_relation` VALUES ('8', '2', '5', '2018-09-10 15:48:21');
INSERT INTO `photo_album_relation` VALUES ('9', '2', '2', '2018-09-10 15:48:34');
INSERT INTO `photo_album_relation` VALUES ('10', '2', '3', '2018-09-10 15:48:36');
INSERT INTO `photo_album_relation` VALUES ('11', '2', '5', '2018-09-10 15:48:38');

-- ----------------------------
-- Table structure for `theme`
-- ----------------------------
DROP TABLE IF EXISTS `theme`;
CREATE TABLE `theme` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `theme_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '相册名称',
  `theme_image` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '主题图片',
  `sort` int(11) DEFAULT '0' COMMENT '排序（数值越大越靠前）',
  `is_delete` tinyint(2) DEFAULT '0' COMMENT '禁用（0：前台可见1：不可见）',
  `insert_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '插入时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='相册表';

-- ----------------------------
-- Records of theme
-- ----------------------------
INSERT INTO `theme` VALUES ('1', '婚纱', '2018-09-14/5b9b6dd677b89.png', '2', '0', null, '2018-09-14 16:14:14');
INSERT INTO `theme` VALUES ('2', '写真', '2018-09-14/5b9b6df354cb5.png', '2', '0', null, '2018-09-14 16:14:43');
INSERT INTO `theme` VALUES ('3', '蜜月', '2018-09-14/5b9b6fb6a2983.png', '2', '0', null, '2018-09-14 16:22:14');
INSERT INTO `theme` VALUES ('4', '小清新', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('5', 'hanna', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('6', 'ZHANGCHEN', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('7', 'FAYE', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('8', 'JJUN', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('9', 'JUICY', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('10', 'HACHI', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('11', 'YUKI', null, '0', '0', null, '2018-08-20 14:58:09');
INSERT INTO `theme` VALUES ('12', '婚礼', '2018-09-14/5b9b6de790140.png', '2', '0', '2018-08-29 00:35:02', '2018-09-14 16:14:31');
INSERT INTO `theme` VALUES ('13', '一生一世', '2018-09-14/5b9b68d99eab0.png', '0', '0', '2018-09-14 15:30:55', '2018-09-14 15:52:57');

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
