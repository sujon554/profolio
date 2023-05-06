import React from "react";
import { Image } from "react-bootstrap";
import design from "../../images/Service/app.webp";
import frontent from "../../images/Service/web-design.webp";
import modify  from "../../images/Service/graphic-design.webp";
import web from "../../images/Service/product-design.webp";
import "./Service.css";

const Service = () => {
  return (
    <div className="container my-5 py-5">
      <h1 className="py-4">SERVICES</h1>
      <div className="row row-cols-2 row-cols-md-4 mx-2">
        <div className="col">
          <div className="columns p-3">
            <Image src={design} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">WEB DESIGN</h5>
              <p className="card-text">
              Created Web Designing Frontend Client sites PSD, Figma to HTML with Mobile, Tab, Laptop, Large Screen Responsive. Making Over 25 sites using HTML, CSS, Bootstrap, Tailwind, SASS also Clients Satisfactions. Pixel Perfect Design, Hover effect, Excellent UI, Best Practices, Project Structure, Clean Code
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="columns p-3">
            <Image src={frontent} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">FRONTENT DEVELOPEMENT</h5>
              <p className="card-text">
              I've created countless frontends starting from simple static layouts to complex dynamic layouts. Comfortable using CSS popular frameworks like Bootstrap, Tailwindcss, MUI, Ant-Design & CSS preprocessor SASS. Various JS frameworks like React.js & Next.js for single-page applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="columns p-3">
            <Image src={web} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">WEB APPLICATION DEVELOPEMENT</h5>
              <p className="card-text">
              Having an APP alongside the website is a must nowadays. I've developed various Apps like simple portfolio viewer to complex e-commerce to social media applications. Mostly used React-Native for app development.
              </p>
            </div>
          </div>
        </div>
      
        <div className="col">
          <div className="columns p-3">
            <Image src={modify} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">MODIFICATION</h5>
              <p className="card-text">
                This is a longer 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;