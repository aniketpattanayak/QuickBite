import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">QuickBite</h3>
                    <p className="footer-description">
                        Delicious meals made with fresh ingredients. Visit us for a quick bite or a full meal experience.
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contact Us</h3>
                    <ul className="footer-list">
                        <li>123 Culinary Lane</li>
                        <li>Food City, FC 45678</li>
                        <li>Email: <a href="mailto:info@quickbite.com">info@quickbite.com</a></li>
                        <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Subscribe</h3>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} QuickBite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
