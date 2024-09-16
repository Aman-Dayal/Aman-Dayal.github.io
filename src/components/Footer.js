import React from 'react';
import { FaLinkedin ,FaEnvelope, FaGithubSquare} from 'react-icons/fa';
import './Footer.css'; // External CSS for styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Aman Dayal. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://linkedin.com/in/aman-dayal120710" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
        <a href="https://github.com/Aman-Dayal" target="_blank" rel="noreferrer"><FaGithubSquare size={30} /></a>
        <a href="mailto:amandayalisworking@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope size={30} /></a>

      {/*, FaTwitter, FaYoutube 
      <a href="https://twitter.com/amandayal" target="_blank" rel="noreferrer"><FaTwitter size={30} /></a>
        <a href="https://youtube.com/@aman-prdx" target="_blank" rel="noreferrer"><FaYoutube size={30} /></a>*/}
      </div>
    </footer>
  );
};

export default Footer;

