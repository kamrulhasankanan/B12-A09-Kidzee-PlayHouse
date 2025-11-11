import React from "react";
import logo from "../assets/logoKid.png"
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
        <img className="w-32 rounded-full" src={logo} alt="" />
          <p>
            Kidzee Playhouse
            <br />
            Providing reliable products since 2002
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">SUPPORT</h6>
          <Link className="link link-hover">Replacement Parts</Link>
          <Link className="link link-hover">Shipping & Returns</Link>
          <Link className="link link-hover">Payment Methods</Link>
          <Link className="link link-hover">Products Recall</Link>
        </nav>
        <nav>
          <h6 className="footer-title">ATTRACTIONS</h6>
          <Link className="link link-hover">Stock House</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Carrer</Link>
          <Link className="link link-hover">Gift Card</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms and condition</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
        <nav>
          <h6 className="footer-title">SOCIAL MEDIA</h6>
          <Link className="link link-hover"><FaFacebook /></Link>
          <Link className="link link-hover"><FaYoutube /></Link>
          <Link className="link link-hover"><FaTwitter /></Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
