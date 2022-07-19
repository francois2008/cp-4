CREATE SCHEMA IF NOT EXISTS `music`;
USE `music` ;

DROP TABLE IF EXISTS `album`;
CREATE TABLE `album` (
  `id_album` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `artist` VARCHAR(255) NOT NULL,
  `released` INT NOT NULL,
  `category` varchar(255) not null,
  PRIMARY KEY (`id_album`));

INSERT INTO `album` VALUES (1,'Enter The Wu-Tang','Wu-Tang Clan',1993,'hiphop'),
(2,' Illmatic','Nas',1994, 'hiphop'),
(3,'Let There Be Rock','AC/DC',1977,'rock'),
(4,'Earth, Wind & Fire','Earth, Wind & Fire',1971,'funk'),
(5,'Kill Em ','Metallica',1983, 'rock'),
(6,'Soul Rebels','Bob Marley & The Wailers',1970,'Reggae'),
(7,'Good Times','Kool And The Gang',1972,'funk');

DROP TABLE IF EXISTS `track`;
CREATE TABLE `track` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `duration` INT NOT NULL DEFAULT 0,
  `album_id` INT NOT NULL,
  `position` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`album_id`)
    REFERENCES `album` (`id_album`));

INSERT INTO `track` VALUES 
(1,'Bring Da Ruckus',250,1,1),(2,'Shame On A Nigga',177,1,2),(3,'Clan In Da Front',273,1,3),(4,'Wu-Tang: 7th Chamber',365,1,4),(5,'Can It Be All So Simple',286,1,5),(6,'Protect Ya Neck (Intermission)',408,1,6),
(7,'The Genesis',105,2,1),(8,'N.Y. State Of Mind',292,2,2),(9,'Life is a bitch',209,2,3),(10,'The World Is Yours',290,2,4),(11,'Halftime',261,2,5),
(12,'Go Down',317,3,1),(13,'Dog Eat Dog',210,3,2),(14,'Let There Be Rock',362,3,3),(15,'Bad Boy Boogie',257,3,4),(16,'Overdose',347,3,5),(17,'Crabsody In Blue',277,3,6),
(18,'Help Somebody',214,4,1),(19,'Moment Of Truth',185,4,2),(20,'Love Is Life',304,4,3),(21,'Fan The Fire',311,4,4),(22,'C mon Children',198,4,5),(23,'This World Today',208,4,6),
(24,'Hit the Lights',257,5,1),(25,'The Four Horsemen',428,5,2),(26,'Motorbreath',183,5,3),(27,'Jump In The Fire',290,5,4),(28,'(Anesthesia)-Pulling Teeth',207,5,5),(29,'Whiplash',246,5,6),
(30,'Soul Rebel',205,6,1),(31,'Try Me',251,6,2),(32,'Its Alright',294,6,3),(33,'No Sympathy',197,6,4),(34,'My Cup',236,6,5),(35,'Soul Almighty',324,6,6),
(36,'Good Times',251,7,1),(37,'Country Junky',174,7,2),(38,'Wild Is Love',202,7,3),(39,'North, East, South, West',216,7,4),(40,'Making Merry Music',186,7,5),(41,'I Remember John W. Coltrane',242,7,6);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `alias` VARCHAR(255) NOT NULL,
  `password` varchar(255) not null,
  PRIMARY KEY (`id_user`));

  INSERT INTO `user` VALUES 
  (1,'francois','paco','wildcode22');

SELECT id_album, title, artist, released, category
FROM album
INNER JOIN user
ON user.id_user = album.id_user