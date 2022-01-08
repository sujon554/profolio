import React from "react";
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
            <a href="https://www.github.com/sujon554/" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sujon554/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>

            <a href="https://www.facebook.com/sujon554/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>

            <a href="https://twitter.com/sujon554" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>

            <button onclick="" id="myBtn" title="Go to top">
              <i class="fas fa-arrow-alt-circle-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
