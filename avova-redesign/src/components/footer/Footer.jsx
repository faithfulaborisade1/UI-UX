import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Head Office</h4>
          <p>Avova Technologies</p>
          <p>Suite 12</p>
          <p>Inish Carraig Business Centre</p>
          <p>Golden Island, Athlone</p>
          <p>Co. Westmeath, Ireland</p>
          <p>N37 K803</p>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Phone: +353 (0)818 811 811</p>
          <p>Phone: +353 (0)90 64 17000</p>
          <p>Fax: +353 (0)90 64 17001</p>
          <p>Sales Email: sales@avova.ie</p>
          <p>Support Email: support@avova.ie</p>
          <p>Enquiries Email: info@avova.ie</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Avova Technologies</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#support">Remote Support</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Latest News/Blog</h4>
          <ul>
            <li><a href="#news">We’re Hiring (March 2024)</a></li>
            <li><a href="#news">Merry Christmas & Happy New Year</a></li>
            <li><a href="#news">Windows Server 2012 End of Life</a></li>
            <li><a href="#news">Christmas Opening Hours</a></li>
            <li><a href="#news">We’re Hiring (Sep 2022)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p>&copy; 2024 Avova Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
