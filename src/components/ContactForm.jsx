import React from "react";
import FormInput from "../components/utils/FormInput";
import { useFormik } from "formik";
import { contactFormSchema } from "../schema";
import Errors from "./utils/Errors";

const ContactForm = () => {
    
   
  const {
    values,
    handleSubmit,
    isValidating,
    errors,
    touched,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      detail: "",
      subject: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: (values, {resetForm})=>{
        resetForm()
    }
  });

 
  
  return (
    <>
      <h4>Contact Us</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <FormInput
              classNames={errors.name && touched.name && `border-danger`}
              handleBlur={handleBlur}
              handleChange={handleChange}
              placeholder="Enter your Name"
              value={values.name}
              name="name"
            />
            <Errors error={errors.name} touch={touched.name} />
          </div>
          <div className="col-lg-6">
            <FormInput
              value={values.email}
              classNames={errors.email && touched.email && `border-danger`}
              handleBlur={handleBlur}
              handleChange={handleChange}
              placeholder="Enter your Email"
              name="email"
            />
            <Errors error={errors.email} touch={touched.email} />
          </div>
          <div className="col-lg-12 my-2">
            <FormInput
              value={values.subject}
              classNames={errors.subject && touched.subject && `border-danger`}
              handleBlur={handleBlur}
              handleChange={handleChange}
              placeholder="Your Subject"
              name="subject"
            />
            <Errors error={errors.subject} touch={touched.subject} />
          </div>
          <div className="col-lg-12 my-2">
            <textarea
              value={values.detail}
              className={
                (errors.detail &&
                  touched.detail &&
                  `form-control border-danger`) ||
                "form-control"
              }
              onBlur={handleBlur}
              onChange={handleChange}
              name="detail"
              placeholder="Enter your Message"
            ></textarea>
            <Errors error={errors.detail} touch={touched.detail} />
          </div>
        </div>
        <button type="submit" className="btn-primary my-2 btn rounded-0 btn-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
