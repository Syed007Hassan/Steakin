-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurantdb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `todaymenu`
--

DROP TABLE IF EXISTS `todaymenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todaymenu` (
  `idBreakfast` int NOT NULL,
  `idlunch` int NOT NULL,
  `iddinner` int NOT NULL,
  `iddessert` int NOT NULL,
  `idDrinks` int NOT NULL,
  PRIMARY KEY (`idBreakfast`,`idlunch`,`iddinner`,`iddessert`,`idDrinks`),
  KEY `idlunch_idx` (`idlunch`),
  KEY `iddinner_idx` (`iddinner`),
  KEY `iddessert_idx` (`iddessert`),
  KEY `idDrinks_idx` (`idDrinks`),
  CONSTRAINT `idBreakfast` FOREIGN KEY (`idBreakfast`) REFERENCES `breakfast` (`idBreakfast`),
  CONSTRAINT `iddessert` FOREIGN KEY (`iddessert`) REFERENCES `dessert` (`iddessert`),
  CONSTRAINT `iddinner` FOREIGN KEY (`iddinner`) REFERENCES `dinner` (`iddinner`),
  CONSTRAINT `idDrinks` FOREIGN KEY (`idDrinks`) REFERENCES `drinks` (`idDrinks`),
  CONSTRAINT `idlunch` FOREIGN KEY (`idlunch`) REFERENCES `lunch` (`idlunch`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todaymenu`
--

LOCK TABLES `todaymenu` WRITE;
/*!40000 ALTER TABLE `todaymenu` DISABLE KEYS */;
INSERT INTO `todaymenu` VALUES (1,1,2,3,4);
/*!40000 ALTER TABLE `todaymenu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-06 14:04:18
