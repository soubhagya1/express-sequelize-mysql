-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 02, 2024 at 11:02 AM
-- Server version: 10.11.5-MariaDB-log
-- PHP Version: 8.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sequelizemysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `demos`
--

CREATE TABLE `demos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `demos`
--

INSERT INTO `demos` (`id`, `title`, `description`, `published`, `createdAt`, `updatedAt`) VALUES
(2, 'no 1 framwork in the world', 'but difficult to master', 0, '2024-01-02 10:36:11', '2024-01-02 10:36:11'),
(3, 'no 2 framwork in the world', 'but difficult to master', 1, '2024-01-02 10:36:17', '2024-01-02 10:54:59'),
(4, 'no 3 framework in the world', 'but difficult to mastering', 0, '2024-01-02 10:36:28', '2024-01-02 10:36:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `demos`
--
ALTER TABLE `demos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `demos`
--
ALTER TABLE `demos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
