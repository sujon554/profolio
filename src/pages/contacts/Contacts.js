import React, { useRef } from "react";
import "./Contacts.css";
import { Button } from "react-bootstrap";
// import { toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // YOUR_SERVICE_ID = service_qu74q3i   YOUR_TEMPLATE_ID= template_3asmhbl   YOUR_PUBLIC_KEY= UlBs5qUYExBBP8IxN

    emailjs.sendForm('service_qu74q3i', 'template_3asmhbl', form.current, 'UlBs5qUYExBBP8IxN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div className="container py-5">
      <div className="row">

        <div className="col py-5">
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              

                <div className="InputFile">
                  <label className="form-label">Name</label>
                  <input className="form-control py-2 m-auto px-3" type="text" name="from_name" placeholder="Example: Mr. X" />
                </div>

                <div className="InputFile">
                  <label className="form-label">Email</label>
                  <input className="form-control py-2 m-auto px-3" type="email" name="user_email" placeholder="Example: xyz@gmail.com"/>
                </div>

                <div className="InputFile">
                  <label>Subject</label>
                  <input className="form-control py-2 m-auto px-3" type="text" name="subject" placeholder="Your Subject"/>
                </div>

                <div className="InputFile">
                  <label className="form-label" >Message</label>
                  <textarea  className="form-control py-2 m-auto px-3" name="message" placeholder="Your Message Here"></textarea>
                </div>
                <Button className="mt-4"  type="submit" value="Send" >Send Mail</Button>
            </form>
        </div>


        <div className="col">
          <h2>E-mail</h2>
          <p>
            mr.sujon554@gmail.com{" "}
            <small>
              <i>(recommended)</i>
            </small>
          </p>

          <h2>Social</h2>

          <a
            href="https://www.linkedin.com/in/sujon554/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.facebook.com/sujon554/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href="https://twitter.com/sujon554"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <h2>Phone</h2>
          <p>
            +8801729664554{" "}
            <small>
              <i>(recommended)</i>
            </small>
          </p>

          <h2>Address</h2>
          <p>Mirpur-1216, Dhaka, Bangladesh </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
