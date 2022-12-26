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
-- Table structure for table `breakfast`
--

DROP TABLE IF EXISTS `breakfast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `breakfast` (
  `idBreakfast` int NOT NULL,
  `ItemName` varchar(20) DEFAULT NULL,
  `Amount` decimal(2,0) DEFAULT NULL,
  `Details` varchar(200) DEFAULT NULL,
  `idChefs` int DEFAULT NULL,
  PRIMARY KEY (`idBreakfast`),
  KEY `idChefs_idx` (`idChefs`),
  CONSTRAINT `iddChefs` FOREIGN KEY (`idChefs`) REFERENCES `chefs` (`idChefs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breakfast`
--

LOCK TABLES `breakfast` WRITE;
/*!40000 ALTER TABLE `breakfast` DISABLE KEYS */;
INSERT INTO `breakfast` VALUES (1,'Grilled Fillet',24,'Chicken fillet, ginger, garlic, honey, pepper & canola oil.creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.',NULL),(2,'Roast Sea Trout',27,'Roast trout, English asparagus, watercress & royals, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.',NULL),(3,'Grilled Seafood ',35,'Monkfish, onion, paella rice, garlic & smoked paprika, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.',NULL),(4,'Smoked Paprika ',18,'Red peppers, roasted garlic, lemon slices, olives & mint, creamy crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping.',NULL),(5,'Smoked Hummus',14,'Roast trout, English asparagus, watercress & royals, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.',NULL),(6,'Roasted Steak',30,'Roast trout, English asparagus, watercress & royals, creamy chesapeake crab, baked and topped with cheddar cheese, with crusty bread.',NULL);
/*!40000 ALTER TABLE `breakfast` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `OldBreakfastRecords` AFTER UPDATE ON `breakfast` FOR EACH ROW BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (new.idBreakfast,new.ItemName,new.Amount,new.Details,new.idChefs);

 END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `OldBreakfastRecord` AFTER DELETE ON `breakfast` FOR EACH ROW BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (old.idBreakfast,old.ItemName,old.Amount,old.Details,old.idChefs);

 END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-06 14:04:18
