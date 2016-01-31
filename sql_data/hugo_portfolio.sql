-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2016 at 09:50 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hugo_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) NOT NULL,
  `technologies` text NOT NULL,
  `date_realized` timestamp NOT NULL,
  `text_date` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `no_images` int(11) NOT NULL,
  `image_extension` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `technologies`, `date_realized`, `text_date`, `description`, `image_url`, `video_url`, `no_images`, `image_extension`) VALUES
(1, 'Stimulix', 'Brain Waves/Processing/Raspberry Pi', '2015-11-07 17:49:43', 'Fall 2015', '\nPrototype elaborated for MuseomixMTL (Hack-a-thon) during a single weekend. The installation captured a user''s reaction to seeing an artwork at the Musée d''art contemporain de Montréal. It captured the brainwaves of the user by using a special device and translated this emotion on a graph which was then printed on a small piece of paper. It was possible to pin this piece of paper to a wall in order to share your reaction to the other visitors of the museum. ', 'assets/img/projects/stimulix/', '', 3, '.png'),
(2, 'Ozone', 'MaxMSP/Kinect/Touchdesigner', '2015-05-27 16:49:43', 'Year 2014/2015', 'Presented at Chromatic Festival 2015 (6th edition). Conception and design of a primitive interactive interface. Audiovisual content is generated, modulated and destroyed by the public. The interactors are elevated to the role of creators. The installation solves the abstraction of a cosmic universe.\n<iframe src="https://player.vimeo.com/video/131061050" width="740" height="416" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', 'assets/img/projects/ozone/', '', 0, '.jpg'),
(3, 'Jutra', 'MaxMSP/Touchdesigner/Resolume Arena', '2015-03-15 16:51:46', 'Spring 2015', 'An audiovisual automaton was created and presented at the 17th Jutra ceremony night here in Montreal as a tribute to Quebec''s cinema industry. This audiovisual artificial intelligence system evolved during the night while presenting multiple scenes of important movies of the past year.', 'assets/img/projects/jutra/', '', 3, '.png'),
(4, 'Captations', 'MaxMSP/Jitter', '2014-12-17 17:51:46', 'Autumn 2014', 'Captations est une collection \n\nd’automates vidéos combinant une \n\nambiance sonore générée en temps réel \n\net ayant un impact sur l’univers de \n\nl’image en temps réel.\n\nLes automates sont laissés à eux-\nmêmes, destinés à évoluer et se \n\nmodifier à travers le temps.', 'assets/img/projects/captations/', '', 3, '.png'),
(5, 'Messages', 'Node.js/MadMapper', '2013-12-18 17:53:11', 'Autumn 2013', 'Immersive installation enabling the sharing of your emotions in real-time. The system was connected to a performer''s cellphone and at any time it was possible for her to share her feelings and mental state to the crowd in the installation. The whole performance ran for a whole month.', 'assets/img/projects/messages/', '', 1, '.png'),
(6, 'Culte Éphémère', 'Quartz Composer/Processing/Resolume Arena', '2013-12-07 17:53:11', 'Autumn 2013', 'Programming and live performance of a visual system on the subject of "Ephemeral". The project consisted of the production of multiple autogenerative visuals and their manipulation in real time.', 'assets/img/projects/culte/', '', 3, '.png'),
(7, 'Sonor Primaire', 'MaxMSP/Jitter', '2013-11-20 17:55:10', 'Autumn 2013', 'Exploration of the echo of visual stimuli on the audio spectru. The project explores the different colors the sound can take by translating different drawings performed in real-time as audio waves.', 'assets/img/projects/sonor/', '', 3, '.png');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
