import React, { useRef } from "react";
import "./Contacts.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const success = <i className="fa-regular fa-circle-check"></i>;
  const wrong = <i className="fa-regular fa-circle-xmark"></i>;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // YOUR_SERVICE_ID = service_qu74q3i   YOUR_TEMPLATE_ID= template_3asmhbl   YOUR_PUBLIC_KEY= UlBs5qUYExBBP8IxN

    emailjs.sendForm('service_qu74q3i', 'template_3asmhbl', form.current, 'UlBs5qUYExBBP8IxN')
      .then((result) => {
         toast.info("Send Your Message !", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
          icon: success
         })
      }, (error) => {
        toast.info("Send Your Message !", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
          icon: wrong
         })
      });
      e.target.reset();
  };



  return (
    <div className="container py-5">
      <div className="row">

        <div className="col py-5">
            <form id="contact-form " ref={form} onSubmit={sendEmail}>
    
                <div className="InputFile">
                  <p className="text-start mb-0 fs-4">Name</p>
                  <input className="form-control py-2 m-auto px-3 fs-5" type="text" name="from_name" placeholder="Example: Mr. X" required />
                </div>

                <div className="InputFile">
                  <p className="text-start mt-4 mb-0 fs-4">Email</p>
                  <input className="form-control py-2 m-auto px-3 fs-5" type="email" name="user_email" placeholder="Example: xyz@gmail.com" required />
                </div>

                <div className="InputFile">
                  <p className="text-start mt-4 mb-0 fs-4">Subject</p>
                  <input className="form-control py-2 m-auto px-3 fs-5" type="text" name="subject" placeholder="Your Subject" required />
                </div>

                <div className="InputFile">
                  <p className="text-start mt-4 mb-0 fs-4" >Message</p>
                  <textarea  className="form-control py-2 m-auto px-3 fs-5" name="message" placeholder="Your Message Here" required></textarea>
                </div>
                <Button className="mt-4 flex-left float-end px-5 py-3 fs-5"  type="submit" value="Send" >Send Mail</Button>
                <ToastContainer />
            </form>
        </div>


        <div className="col icon">
          <h2 className="mt-5 ">E-mail</h2>
          <p>
            mr.sujon554@gmail.com{" "}
            <small>
              <small>(recommended)</small>
            </small>
          </p>

          <h2>Social</h2>
          <a
            href="https://github.com/sujon554?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
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
              <small>(recommended)</small>
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
