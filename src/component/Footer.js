import React from "react";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer">
      <span className="text-color copyrights">
        <span className="footer-icons">Copyright</span>
        <span className="footer-icons">Privacy</span>
        <span className="footer-icons">Terms</span>
        <span className="footer-icons">Cookie Settings</span>
        <span className="footer-copyright">
          <span className="footer-icons">
            <CopyrightIcon className="copyright-icon" />
          </span>
          <span>2022 ESMP</span>
        </span>
      </span>
      <span className="text-color footer-icons-alignment">
        <span className="footer-icons">
          <FacebookIcon />
        </span>
        <span className="footer-icons">
          <InstagramIcon />
        </span>
        <span className="footer-icons">
          <TwitterIcon />
        </span>
        <span className="footer-icons">
          <LinkedInIcon />
        </span>
        <span className="footer-icons">
          <YouTubeIcon />
        </span>
      </span>
    </div>
  );
};
export default Footer;
