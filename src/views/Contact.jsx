import React from "react";
import BreadCrumb from "../components/utils/BreadCrumb";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <BreadCrumb title="Contact" />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.480602523885!2d91.82132905541995!3d22.358531300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad277ab0cff8a7%3A0x13eb8ccef8a22dde!2sCreative%20IT%20Institute%2C%20Chattogram%20Branch!5e0!3m2!1sen!2sbd!4v1706953234874!5m2!1sen!2sbd"
              width="100%"
              height="350"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-lg-7">

           <ContactForm/>


          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
