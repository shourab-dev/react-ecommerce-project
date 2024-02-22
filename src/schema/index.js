import * as yum from "yup";

const contactFormSchema = yum.object().shape({
  name: yum.string().min(2,"Please enter min 2 character").max(60).required(),
  email: yum.string().email().required(),
  subject: yum.string().max(60),
  detail: yum.string().max(250),
});

export { contactFormSchema };
