-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 06, 2018 at 08:04 AM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `users_name` varchar(32) NOT NULL,
  `users_email` text NOT NULL,
  `users_password` text NOT NULL,
  `users_joined` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email` (`users_email`(50))
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `users_name`, `users_email`, `users_password`, `users_joined`) VALUES
(16, 'Jordan Langton', 'jglangton4@gmail.com', '$2a$10$I.BPmOa/4reirA6xQRjer.20ErF9B9obtFd2LkqRNQr/G0TyYaKWe', '2018-06-18'),
(17, 'Eddy', 'test@test.com', '$2a$10$95dTO847OnQtlqSASuYOZezUq7FhiRKlpsO3YXt49ukF1tkvDaUbO', '2018-06-18');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
