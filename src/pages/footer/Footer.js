import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2">
          <div className="col">
            <small> &copy; 2022 All reserved Sujon Mostofa</small>
          </div>
          <div className="col">
            {/* <a href="https://www.github.com/sujon554/" target="_blank"  rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sujon554/" target="_blank"  rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://www.facebook.com/sujon554/" target="_blank"  rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="https://twitter.com/sujon554" target="_blank"  rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a> */}

            <Button href="#about" id="myBtn" title="Go to top">
              <i className="fas fa-arrow-alt-circle-up"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
