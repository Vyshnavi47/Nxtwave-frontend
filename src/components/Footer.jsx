import { Link } from "react-router-dom";
import { useState } from "react";
import "./Footer.css";
import amex from "../assets/amex.png";
import mastercard from "../assets/master.png";
import apple from "../assets/apple.png";
import gpay from "../assets/gpay.png";
import opay from "../assets/opay.png";
import pay from "../assets/pay.png";
import us from "../assets/us.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [openSections, setOpenSections] = useState({
    company: false,
    quickLinks: false,
    contact: false,
    follow: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="footer-container container">
          <div className="newsletter-content">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry, this is simply dummy text.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div className="contact-info-call-us-section">
            <div className="call-us">
              <h3>CALL US</h3>
              <p>+44 221 133 5360 </p>
              <p> customercare@metamuse.com</p>
            </div>

            <div className="currency-section">
              <h3>CURRENCY</h3>
              <div className="currency-icon">
                <img src={us} alt="US" /> + USD
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div
              className={`footer-column ${openSections.company ? "open" : ""}`}
            >
              <h3 onClick={() => toggleSection("company")}>metaà muse</h3>
              <ul className="footer-links">
                <li>Shop</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliance Docs</li>
              </ul>
            </div>

            <div
              className={`footer-column ${
                openSections.quickLinks ? "open" : ""
              }`}
            >
              <h3 onClick={() => toggleSection("quickLinks")}>QUICK LINKS</h3>
              <ul className="footer-links">
                <li>Orders & Shipping</li>
                <li>Join/Login as a seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div
              className={`footer-column ${openSections.follow ? "open" : ""}`}
            >
              <h3 onClick={() => toggleSection("follow")}>FOLLOW US</h3>
              <div className="social-follow">
                <div className="social-icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3>metaà muse ACCEPTS</h3>
              <div className="payment-methods">
                <img src={gpay} alt="Visa" />
                <img src={mastercard} alt="Mastercard" />
                <img src={pay} alt="American Express" />
                <img src={amex} alt="Crypto" />
                <img src={apple} alt="Crypto" />
                <img src={opay} alt="Crypto" />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright © 2023 metaàmuse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
