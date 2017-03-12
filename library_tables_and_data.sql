-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 12, 2017 at 05:48 AM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.15-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int(10) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `address` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `firstname`, `lastname`, `address`, `created_at`, `updated_at`) VALUES
(1, 'William', 'Shakespeare', 'william.shakespeare', '2017-03-07 21:27:12', '2017-03-07 21:27:12'),
(2, 'Lewis', 'Wallace', 'lewis.wallace', '2017-03-07 21:27:12', '2017-03-07 21:27:12'),
(3, 'Johnny', 'Ivy', 'London', '2017-03-10 23:29:31', '2017-03-10 23:29:31'),
(4, 'Stephen', 'Njau', 'Kenya', '2017-03-10 23:30:45', '2017-03-10 23:30:45'),
(5, 'Pramod', 'Mohandas', 'India', '2017-03-10 23:36:25', '2017-03-10 23:36:25');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(20) NOT NULL,
  `title` text NOT NULL,
  `author_id` int(10) NOT NULL,
  `pages` int(10) DEFAULT NULL,
  `cover` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `author_id`, `pages`, `cover`, `created_at`, `updated_at`) VALUES
(1, 'Cowdy of Errors', 1, 777, 'comedy.png', '2017-03-07 21:28:54', '2017-03-07 21:28:54'),
(2, 'Ben Hur', 2, 500, 'nil', '2017-03-07 21:28:54', '2017-03-07 21:28:54'),
(3, 'Democratic Governance', 3, 994, 'democracy.png', '2017-03-10 21:34:32', '2017-03-10 21:34:32'),
(4, '\'Panama\'', 2, 150, '\'manu.png\'', '2017-03-10 21:38:18', '2017-03-10 21:38:18'),
(5, '\'NodeJS\'', 1, 450, '\'manunited.png\'', '2017-03-10 21:41:04', '2017-03-10 21:41:04'),
(6, 'NodeJS', 1, 450, 'hahaha', '2017-03-10 21:47:45', '2017-03-10 21:47:45'),
(7, 'Code of Honor', 1, 777, 'code.jpg', '2017-03-10 21:48:39', '2017-03-10 21:48:39'),
(8, 'NodeJS', 1, 450, 'hahaha', '2017-03-10 21:49:05', '2017-03-10 21:49:05'),
(9, 'DevOps Engineering', 4, 310, 'devops.jpg', '2017-03-10 23:43:09', '2017-03-10 23:43:09'),
(10, 'Software Engineering', 5, 94, 'software.jpg', '2017-03-10 23:48:32', '2017-03-10 23:48:32'),
(11, 'Doctrate iñ        Med        i c      inw', 3, 994, 'medical.j           pg', '2017-03-10 23:51:21', '2017-03-10 23:51:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
