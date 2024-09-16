import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import bannerLogo from '../assets/logo.png'; // Replace with the actual path to your banner/logo image
import profilePic from '../assets/profile-pic2.jpg';

const Home = () => {
  return (
    <div className="home">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="image-container">
          <motion.div
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <img src={profilePic} alt="Aman Dayal" className="profile-image" />
            
          </motion.div>
          <motion.div
            className="banner-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <img src={bannerLogo} alt="Banner Logo" />
          </motion.div>
          
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
