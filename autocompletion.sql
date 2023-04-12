-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 12 avr. 2023 à 13:50
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `autocompletion`
--

-- --------------------------------------------------------

--
-- Structure de la table `nourriture`
--

DROP TABLE IF EXISTS `nourriture`;
CREATE TABLE IF NOT EXISTS `nourriture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `nourriture`
--

INSERT INTO `nourriture` (`id`, `nom`, `type`) VALUES
(1, 'brownie', 'chocolat'),
(5, 'cake', 'gateau'),
(3, 'pates', 'feculent'),
(4, 'carotte', 'legume'),
(6, 'coca', 'boisson'),
(7, 'champagne', 'boisson'),
(8, 'macaron', 'gateau'),
(9, 'dragibus', 'bonbon'),
(10, 'pims', 'gateau'),
(11, 'pepsi', 'boisson'),
(12, 'entrecote', 'viande'),
(13, 'maroilles', 'fromage'),
(14, 'evian', 'boisson'),
(15, 'cafe', 'boisson'),
(16, 'the', 'boisson'),
(17, 'haricots', 'legume'),
(18, 'cornichon', 'legume'),
(19, 'delichoc', 'gateau'),
(20, 'lait', 'boisson'),
(21, 'cookie', 'gateau'),
(22, 'fanta', 'boisson'),
(23, 'cabillaud', 'poisson');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
