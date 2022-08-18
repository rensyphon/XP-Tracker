
import React from "react";
import { SocialIcon } from "react-social-icons";
import '../Footer/Footer.css'
import logo from '../../assets/images/xp-tracker-logo.png'

export default function Footer() {
  return (
    <div id="footer-wrap">
    <footer className="footer">
      <div className="top-footer">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <a href="/" title="XPtracker">
                <img
                  src={logo}
                  width="200px"
                  alt="XPtracker-Logo"
                  className="img-fluid"
                />
                
              </a>
              <p className="tagline"></p>
            </div>
          </div>
          <div className="col-md-2">
            <h4>Links</h4>
            <ul className="footer-link">
              <li>
                <a href="/" title="Home">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>About Us</h4>
            <ul className="footer-link">
              <li>
                <a href="instagram.com" title="Faq">
                  Faq
                </a>
              </li>
              <li>
                <a href="twitter.com" title="Blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className="footer-link">
              <li>
                <a href="mail-to:xptracker.eip@gmail.com" title="Contact">
                  xptracker@gmail.com
                </a>
              </li>
              <li>
                <div className="icons">
                  <SocialIcon
                    href="#"
                    title="Facebook"
                    network="facebook"
                    bgColor="#ffffff"
                  />
                  <SocialIcon
                    href="#"
                    title="Link"
                    network=""
                    bgColor="#ffffff"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="row">
          <div className="col-md-5">
            <p className="copyright pt-3">
              Copyright &copy; 2022 XPtracker
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}