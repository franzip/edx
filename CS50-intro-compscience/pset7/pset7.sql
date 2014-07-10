-- MySQL dump 10.14  Distrib 5.5.32-MariaDB, for Linux (i686)
--
-- Host: localhost    Database: pset7
-- ------------------------------------------------------
-- Server version	5.5.32-MariaDB

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
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `history` (
  `id` int(10) unsigned NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `amount` decimal(65,4) unsigned NOT NULL,
  `quantity` int(10) unsigned DEFAULT NULL,
  `symbol` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`,`time`),
  KEY `type` (`type`),
  KEY `type_2` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (19,'2014-04-01 20:46:49','Purchase',3404.6700,3,'GOOG'),(19,'2014-04-01 20:46:57','Purchase',2708.2500,5,'AAPL'),(19,'2014-04-01 20:47:05','Purchase',455.6200,11,'MSFT'),(19,'2014-04-01 20:47:18','Sell',124.2600,3,'MSFT'),(19,'2014-04-01 20:47:24','Deposit',5000.0000,NULL,NULL),(19,'2014-04-01 20:49:25','Sell',1134.8900,1,'GOOG'),(19,'2014-04-01 20:49:36','Purchase',5144.8500,15,'AMZN'),(19,'2014-04-01 20:49:55','Purchase',4115.8800,12,'AMZN'),(21,'2014-04-01 20:50:50','Purchase',2380.0000,20,'CVX'),(21,'2014-04-01 20:51:55','Purchase',197.5000,50,'AXAS'),(21,'2014-04-01 20:52:11','Purchase',5057.2500,25,'CLB'),(21,'2014-04-01 20:52:42','Deposit',250.0000,NULL,NULL),(21,'2014-04-01 20:52:49','Sell',59.2500,15,'AXAS'),(22,'2014-04-01 20:54:29','Purchase',660.4000,20,'CSIQ'),(22,'2014-04-01 20:54:44','Purchase',5555.0000,5,'AAMC');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shares`
--

DROP TABLE IF EXISTS `shares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shares` (
  `id` int(10) unsigned NOT NULL,
  `symbol` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`,`symbol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shares`
--

LOCK TABLES `shares` WRITE;
/*!40000 ALTER TABLE `shares` DISABLE KEYS */;
INSERT INTO `shares` VALUES (19,'AAPL',5),(19,'AMZN',27),(19,'GOOG',2),(19,'MSFT',8),(21,'AXAS',35),(21,'CLB',25),(21,'CVX',20),(22,'AAMC',5),(22,'CSIQ',20);
/*!40000 ALTER TABLE `shares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cash` decimal(65,4) unsigned NOT NULL DEFAULT '0.0000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'caesar','caesar@harvard.com','$1$50$GHABNWBNE/o4VL7QjmQ6x0',10000.0000),(2,'hirschhorn','hirschhorn@harvard.com','$1$50$lJS9HiGK6sphej8c4bnbX.',10000.0000),(3,'jharvard','jharvard@harvard.com','$1$50$RX3wnAMNrGIbgzbRYrxM1/',10000.0000),(4,'malan','malan@harvard.com','$1$HA$azTGIMVlmPi9W9Y12cYSj/',10000.0000),(5,'milo','milo@harvard.com','$1$HA$6DHumQaK4GhpX8QE23C8V1',10000.0000),(6,'skroob','skroob@harvard.com','$1$50$euBi4ugiJmbpIbvTTfmfI.',10000.0000),(7,'zamyla','zamyla@harvard.com','$1$50$uwfqB45ANW.9.6qaQ.DcF.',10000.0000),(19,'pippotto','pi@po.pi','$1$HW7L1O2N$Kq3ogZDLqSIEhVaFwgo8b0',429.8800),(21,'ciccio','ci@ci.ci','$1$dsDslmgz$seoafMeDoszpP9o4fuqIv0',2674.5000),(22,'user123','user123@ab.cd','$1$Terk3U7B$sK/48G9VL2DCjF9MbsyKh.',3784.6000);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-04-01 17:13:04
