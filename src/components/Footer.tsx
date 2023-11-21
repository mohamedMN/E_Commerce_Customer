// Footer.tsx
import React from "react";
import "../styles/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links_div">
              <h4>Goodies</h4>
              <h3>Subscribe</h3>

              <p>Get 10% off your first order</p>
            </div>
            <div className="sb_footer-links_div">
              <h4>Support</h4>
              <p>111 avenue IFIAG, Rabat, Maroc</p>
              <p>goodies@gmail.com</p>
              <p>+212664545879</p>
            </div>
            <div className="sb_footer-links_div">
              <h4>Account</h4>
              <a href="">
                <p>My Account</p>
              </a>
              <a href="/login">
                <p>Login / Register</p>
              </a>
              <a href="/cart">
                <p>Cart</p>
              </a>
              <a href="/wishlist">
                <p>Wishlist</p>
              </a>
              <a href="/shop">
                <p>Shop</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Quick Link</h4>
              <a href="">
                <p>Privacy Policy</p>
              </a>
              <a href="">
                <p>Terms Of Use</p>
              </a>
              <a href="">
                <p>FAQ</p>
              </a>
              <a href="">
                <p>Contact</p>
              </a>
            </div>

            <div className="sb_footer-links_div">
              <h4>Download App</h4>
              <div className="socialmedia">
                <p>Save $3 with App User Only </p>
                <br />
                <br />
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <FaLinkedinIn />
                </p>
                <p>
                  <FaInstagram />
                </p>
              </div>
            </div>
            <hr></hr>

            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>
                  <FaRegCopyright /> Copyright Goodies.{" "}
                  {new Date().getFullYear()}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
