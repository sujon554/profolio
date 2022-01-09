import React from "react";
 import "./Contacts.css";
 const Contacts = () => {
   return (
     <div className="container py-5">
       <div className="row">
         <div className="col py-5">
           <h5 className="py-5 lh-base text-center">
             I am interested in working with any company that thinks my skill
             will be helpful for them. If you are looking for someone like me,
             Please let me know or You can just say "hello" t me.
           </h5>
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

           <a href="https://www.linkedin.com/in/sujon554/" target="_blank">
             <i class="fab fa-linkedin"></i>
           </a>

           <a href="https://www.facebook.com/sujon554/" target="_blank">
             <i class="fab fa-facebook"></i>
           </a>

           <a href="https://twitter.com/sujon554" target="_blank">
             <i class="fab fa-twitter"></i>
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
