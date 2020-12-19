-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 19, 2020 lúc 04:16 AM
-- Phiên bản máy phục vụ: 10.1.36-MariaDB
-- Phiên bản PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `mahoa`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_txt`
--

CREATE TABLE `tbl_txt` (
  `noi_dung` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ma_md5` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_txt`
--

INSERT INTO `tbl_txt` (`noi_dung`, `ma_md5`) VALUES
('Yêu', 'b0b34f7c2d4a6112463dec76cb64a159'),
('12345', '827ccb0eea8a706c4c34a16891f84e7b'),
('0123456789', '781e5e245d69b566979b86e28d23f2c7'),
('123456789', '25f9e794323b453885f5181f1b624d0b'),
('12345678', '25d55ad283aa400af464c76d713c07ad'),
('Love you', '3ee71e37403e6a4258f4c7999b8efe95'),
('Love', '8bd7a1153a88761ad9d37e2f2394c947'),
('I love you', 'e4f58a805a6e1fd0f6bef58c86f9ceb3'),
('hello', '5d41402abc4b2a76b9719d911017c592'),
('Hello', '8b1a9953c4611296a827abf8c47804d7'),
(' ', '7215ee9c7d9dc229d2921a40e899ec5f'),
(' Hello', '47e9f341eb8825211c066245567b114d');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_txt`
--
ALTER TABLE `tbl_txt`
  ADD UNIQUE KEY `ma_md5` (`ma_md5`(255));
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
