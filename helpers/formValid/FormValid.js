import * as Yup from "yup";

export const validationSchema = Yup.object({

   
    full_name: Yup.string()
    .required("نام و نام خانوادگی الزامی می باشد"),
    
    email: Yup.string()
    .required("ایمیل الزامی می باشد")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "ایمیل معتبر وارد کنید"),
    description: Yup.string()
    .required("نام و نام خانوادگی الزامی می باشد"),
   
    subject: Yup.string()
    .required("نام و نام خانوادگی الزامی می باشد")
   
  
});
