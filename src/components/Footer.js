import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <h3>About</h3>
          <span>About Us</span>
          <span>Support</span>
          <span>Docs</span>
        </div>
        <div>
          <h3>Contact Details</h3>
          <span>
            <i class="bi bi-envelope"></i> reactwithweather@gmail.com
          </span>
          <div className="footer-icons">
            <span>
              <i className="bi bi-facebook footer-icon"></i>
            </span>
            <span>
              <i className="bi bi-twitter footer-icon"></i>
            </span>
            <span>
              <i className="bi bi-linkedin footer-icon"></i>
            </span>
            <span>
              <i className="bi bi-instagram footer-icon"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <p>
          © All rights reserved.{" "}
          <span>
            <a className="footer-app-tag" href="/">
              ReactWithWeather
            </a>
          </span>
        </p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
