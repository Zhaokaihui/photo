-- MySQL dump 10.13  Distrib 5.6.12, for Win32 (x86)
--
-- Host: localhost    Database: tp
-- ------------------------------------------------------
-- Server version	5.6.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `allot`
--

DROP TABLE IF EXISTS `allot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `allot` (
  `Allot_id` int(11) NOT NULL AUTO_INCREMENT,
  `Allot_tab` int(11) NOT NULL,
  `Parallelism` int(11) NOT NULL,
  `User_id` int(11) NOT NULL,
  `Visit_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`Allot_id`),
  KEY `fk_Allot_User` (`User_id`),
  CONSTRAINT `fk_Allot_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allot`
--

LOCK TABLES `allot` WRITE;
/*!40000 ALTER TABLE `allot` DISABLE KEYS */;
INSERT INTO `allot` VALUES (1,2,1,4,1432178612),(2,3,1,5,1432178612);
/*!40000 ALTER TABLE `allot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `degree`
--

DROP TABLE IF EXISTS `degree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `degree` (
  `Degree_id` int(11) NOT NULL AUTO_INCREMENT,
  `Project_id` int(11) NOT NULL,
  `User_id` int(11) NOT NULL,
  PRIMARY KEY (`Degree_id`),
  KEY `fk_Degree_User` (`User_id`),
  KEY `fk_Degree_Project` (`Project_id`),
  CONSTRAINT `fk_Degree_Project` FOREIGN KEY (`Project_id`) REFERENCES `project` (`Project_id`),
  CONSTRAINT `fk_Degree_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degree`
--

LOCK TABLES `degree` WRITE;
/*!40000 ALTER TABLE `degree` DISABLE KEYS */;
INSERT INTO `degree` VALUES (1,1,1),(2,1,2),(3,1,4),(4,2,2),(5,2,1),(6,2,5),(7,3,3),(8,3,6);
/*!40000 ALTER TABLE `degree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discuss`
--

DROP TABLE IF EXISTS `discuss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discuss` (
  `Discuss_id` int(11) NOT NULL AUTO_INCREMENT,
  `User_id` int(11) NOT NULL,
  `Discuss_tab` int(11) NOT NULL,
  `Parallelism` int(11) NOT NULL,
  `Content` varchar(255) NOT NULL,
  PRIMARY KEY (`Discuss_id`),
  KEY `fk_Discuss_User` (`User_id`),
  CONSTRAINT `fk_Discuss_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discuss`
--

LOCK TABLES `discuss` WRITE;
/*!40000 ALTER TABLE `discuss` DISABLE KEYS */;
INSERT INTO `discuss` VALUES (1,1,1,1,'垃圾'),(2,1,1,2,'菜鸟'),(3,1,2,1,'垃圾'),(4,2,2,2,'太难');
/*!40000 ALTER TABLE `discuss` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `Group_id` int(11) NOT NULL AUTO_INCREMENT,
  `Group_name` varchar(50) NOT NULL,
  `Describe` varchar(255) NOT NULL,
  `Project_id` int(11) NOT NULL,
  `Order` varchar(255) NOT NULL,
  PRIMARY KEY (`Group_id`),
  KEY `fk_Group_Project` (`Project_id`),
  CONSTRAINT `fk_Group_Project` FOREIGN KEY (`Project_id`) REFERENCES `project` (`Project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` VALUES (1,'king','牛逼',1,'a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}'),(2,'admin','牛逼',1,'a:3:{i:0;i:4;i:1;i:5;i:2;i:6;}'),(3,'user','屌',2,'a:3:{i:0;i:7;i:1;i:8;i:2;i:9;}');
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `News_id` int(11) NOT NULL AUTO_INCREMENT,
  `Put_id` int(11) NOT NULL,
  `Get_id` int(11) NOT NULL,
  `News_tab` int(11) NOT NULL,
  `Parallelism` int(11) NOT NULL,
  `Content` varchar(255) NOT NULL,
  PRIMARY KEY (`News_id`),
  KEY `fk_News_Put` (`Put_id`),
  KEY `fk_News_Get` (`Get_id`),
  CONSTRAINT `fk_News_Get` FOREIGN KEY (`Get_id`) REFERENCES `user` (`User_id`),
  CONSTRAINT `fk_News_Put` FOREIGN KEY (`Put_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,1,5,1,1,'把你加进项目'),(2,2,5,2,4,'把你加任务');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `note`
--

DROP TABLE IF EXISTS `note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `note` (
  `Note_id` int(11) NOT NULL AUTO_INCREMENT,
  `User_id` int(11) NOT NULL,
  `Create_time` int(11) NOT NULL,
  `Edit_time` int(11) NOT NULL,
  `Note_title` varchar(255) NOT NULL,
  `Note_text` text NOT NULL,
  PRIMARY KEY (`Note_id`),
  KEY `fk_Note_User` (`User_id`),
  CONSTRAINT `fk_Note_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `note`
--

LOCK TABLES `note` WRITE;
/*!40000 ALTER TABLE `note` DISABLE KEYS */;
INSERT INTO `note` VALUES (1,1,1432178186,1432178196,'我和你','大家好才是真的好'),(2,2,1432178186,1432178196,'我和她','大家好才是真的不好');
/*!40000 ALTER TABLE `note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `Project_id` int(11) NOT NULL AUTO_INCREMENT,
  `Project_name` varchar(50) NOT NULL,
  `Create_time` int(11) NOT NULL,
  `Stop_time` int(11) NOT NULL,
  `Final_time` int(11) NOT NULL,
  `User_id` int(11) NOT NULL,
  `Pigeonhole` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  PRIMARY KEY (`Project_id`),
  KEY `fk_Project_User` (`User_id`),
  CONSTRAINT `fk_Project_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'屌炸天',1432176033,1432176053,1432176073,1,1,'default.jpg'),(2,'屌爆了',1432174033,1432174053,1432174073,2,0,'default.jpg'),(3,'屌飞了',1432176033,1432176153,1432186073,3,0,'default.jpg');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relevance`
--

DROP TABLE IF EXISTS `relevance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `relevance` (
  `Relevance_id` int(11) NOT NULL AUTO_INCREMENT,
  `Create_time` int(11) NOT NULL,
  `Edit_time` int(11) NOT NULL,
  `User_id` int(11) NOT NULL,
  `Project_id` int(11) NOT NULL,
  `Start_time` int(11) NOT NULL,
  `Stop_time` int(11) NOT NULL,
  `Repeat` char(3) NOT NULL,
  `Relevance_title` varchar(50) NOT NULL,
  `Relevance_memo` varchar(255) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Relevance_id`),
  KEY `fk_Relevance_User` (`User_id`),
  KEY `fk_Relevance_Project` (`Project_id`),
  CONSTRAINT `fk_Relevance_Project` FOREIGN KEY (`Project_id`) REFERENCES `project` (`Project_id`),
  CONSTRAINT `fk_Relevance_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relevance`
--

LOCK TABLES `relevance` WRITE;
/*!40000 ALTER TABLE `relevance` DISABLE KEYS */;
INSERT INTO `relevance` VALUES (1,1432178612,1432178622,1,1,1432178632,1432178642,'重复','妈的','真你妈累',''),(2,1432178612,1432178622,2,2,1432178632,1432178642,'不重复','蛋的','真你妈辛苦','');
/*!40000 ALTER TABLE `relevance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `Review_id` int(11) NOT NULL AUTO_INCREMENT,
  `User_id` int(11) NOT NULL,
  `Review_time` int(11) NOT NULL,
  `Content` varchar(255) NOT NULL,
  `Review_tab` int(11) NOT NULL,
  `Parallelism` int(11) NOT NULL,
  `Project_id` int(11) NOT NULL,
  PRIMARY KEY (`Review_id`),
  KEY `fk_Review_User` (`User_id`),
  KEY `fk_Review_Project` (`Project_id`),
  CONSTRAINT `fk_Review_Project` FOREIGN KEY (`Project_id`) REFERENCES `project` (`Project_id`),
  CONSTRAINT `fk_Review_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,1432178176,'不错',1,1,1),(2,1,1432178176,'不错',2,1,1),(3,2,1432178176,'不错',2,4,1);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `share`
--

DROP TABLE IF EXISTS `share`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `share` (
  `Share_id` int(11) NOT NULL AUTO_INCREMENT,
  `Share_title` varchar(255) NOT NULL,
  `Create_time` int(11) NOT NULL,
  `Edit_time` int(11) NOT NULL,
  `User_id` int(11) NOT NULL,
  `Share_text` text NOT NULL,
  `Project_id` int(11) NOT NULL,
  PRIMARY KEY (`Share_id`),
  KEY `fk_Share_User` (`User_id`),
  KEY `fk_Share_Project` (`Project_id`),
  CONSTRAINT `fk_Share_Project` FOREIGN KEY (`Project_id`) REFERENCES `project` (`Project_id`),
  CONSTRAINT `fk_Share_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `share`
--

LOCK TABLES `share` WRITE;
/*!40000 ALTER TABLE `share` DISABLE KEYS */;
INSERT INTO `share` VALUES (1,'我勒个',1432178404,1432178414,1,'麻痹的',1),(2,'你勒个',1432178424,1432178434,2,'你麻痹的',2),(3,'滚粗',1432176033,1432176039,1,'你麻痹你麻痹',2),(4,'阿范德萨',1432176033,1432176033,3,'额外发大水发送的发热我v',1);
/*!40000 ALTER TABLE `share` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `son`
--

DROP TABLE IF EXISTS `son`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `son` (
  `Son_id` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(50) NOT NULL,
  `Task_id` int(11) NOT NULL,
  PRIMARY KEY (`Son_id`),
  KEY `fk_Son_Task` (`Task_id`),
  CONSTRAINT `fk_Son_Task` FOREIGN KEY (`Task_id`) REFERENCES `task` (`Task_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `son`
--

LOCK TABLES `son` WRITE;
/*!40000 ALTER TABLE `son` DISABLE KEYS */;
INSERT INTO `son` VALUES (1,'你妹',1),(2,'滚粗',4),(3,'草',7);
/*!40000 ALTER TABLE `son` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stage`
--

DROP TABLE IF EXISTS `stage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stage` (
  `Stage_id` int(11) NOT NULL AUTO_INCREMENT,
  `Stage_name` varchar(255) NOT NULL,
  `Order` varchar(255) NOT NULL,
  `Group_id` int(11) NOT NULL,
  PRIMARY KEY (`Stage_id`),
  KEY `fk_Stage_Group` (`Group_id`),
  CONSTRAINT `fk_Stage_Group` FOREIGN KEY (`Group_id`) REFERENCES `group` (`Group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stage`
--

LOCK TABLES `stage` WRITE;
/*!40000 ALTER TABLE `stage` DISABLE KEYS */;
INSERT INTO `stage` VALUES (1,'one','a:1:{i:0;i:1;}',1),(2,'two','a:1:{i:0;i:2;}',1),(3,'three','a:1:{i:0;i:3;}',1),(4,'one','a:1:{i:0;i:4;}',2),(5,'two','a:1:{i:0;i:5;}',2),(6,'three','a:1:{i:0;i:6;}',2),(7,'one','a:1:{i:0;i:7;}',3),(8,'two','a:1:{i:0;i:8;}',3),(9,'three','a:1:{i:0;i:9;}',3);
/*!40000 ALTER TABLE `stage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task` (
  `Task_id` int(11) NOT NULL AUTO_INCREMENT,
  `Task_name` varchar(50) NOT NULL,
  `Create_time` int(11) NOT NULL,
  `Stop_time` int(11) NOT NULL,
  `Final_time` int(11) NOT NULL,
  `Edit_time` int(11) NOT NULL,
  `User_id` int(11) NOT NULL,
  `Priority` char(4) NOT NULL,
  `Repeat` char(3) NOT NULL,
  `State` char(3) NOT NULL,
  `Content` varchar(255) DEFAULT NULL,
  `Stage_id` int(11) NOT NULL,
  `Pigeonhole` int(11) NOT NULL,
  PRIMARY KEY (`Task_id`),
  KEY `fk_Task_User` (`User_id`),
  KEY `fk_Task_Stage` (`Stage_id`),
  CONSTRAINT `fk_Task_Stage` FOREIGN KEY (`Stage_id`) REFERENCES `stage` (`Stage_id`),
  CONSTRAINT `fk_Task_User` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'哎哟',1432176043,1432176050,1432176070,1432176051,1,'普通','不重复','已完成','把妹',1,1),(2,'哎哟',1432176043,1432176050,1432176070,1432176051,1,'紧急','重复','已完成','把妹',2,1),(3,'哎哟',1432176043,1432176050,1432176070,1432176051,1,'非常紧急','不重复','已完成','把妹',3,1),(4,'哎哟',1432174043,1432174050,1432174070,1432176051,2,'普通','不重复','未完成','把妹',4,0),(5,'哎哟',1432174043,1432174050,1432174070,1432176051,2,'紧急','重复','未完成','把妹',5,0),(6,'哎哟',1432174043,1432174050,1432174070,1432176051,2,'非常紧急','不重复','未完成','把妹',6,0),(7,'哎哟',1432176035,1432176053,1432176073,1432176058,3,'普通','不重复','已完成','把妹',7,0),(8,'哎哟',1432176043,1432176050,1432186070,1432176051,3,'紧急','重复','已完成','把妹',8,1),(9,'哎哟',1432176043,1432186090,1432186070,1432186100,3,'非常紧急','不重复','未完成','把妹',9,0);
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `User_id` int(11) NOT NULL AUTO_INCREMENT,
  `User_name` varchar(50) NOT NULL,
  `Pwd` char(32) NOT NULL,
  `Face` varchar(60) NOT NULL,
  `User_introduction` varchar(255) NOT NULL,
  `User_tel` varchar(11) NOT NULL,
  `Visit_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'king','king','default.jpg','牛逼','12345678910',1432176033),(2,'admin','admin','default.jpg','牛逼','12345678910',1432176033),(3,'user','user','default.jpg','牛逼','12345678910',1432176033),(4,'a','king','default.jpg','牛逼','12345678910',1432176033),(5,'b','king','default.jpg','牛逼','12345678910',1432176033),(6,'c','king','default.jpg','牛逼','12345678910',1432176033);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-05-25 12:00:23
