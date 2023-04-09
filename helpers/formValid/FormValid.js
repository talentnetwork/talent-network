import * as Yup from "yup";

export const validationSchema = Yup.object({

   
    full_name: Yup.string()
    .required("Name required"),
    
    email: Yup.string()
    .required(" email required ")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, " Invalid Email"),
    description: Yup.string()
    .required("Explanes required" ),
   
    subject: Yup.string()
    .required("subject required")
   
  
});
