import * as Yup from "yup";

export const validationSchemaManager = Yup.object({
  username: Yup.string()
    .required("کدملی  الزامی می باشد")
    .matches(/^[0-9]{10}$/, "لطفا کدملی معتبر وارد کنید"),
  first_name: Yup.string()
    .required("نام الزامی می باشد")
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا نام را فارسی وارد کنید"),
  last_name: Yup.string()
    .required("نام خانوادگی الزامی می باشد")
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا نام خانوادگی را فارسی وارد کنید"),
  email: Yup.string()
    .required("ایمیل الزامی می باشد")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "ایمیل معتبر وارد کنید"),
  phone: Yup.string()
    .required("شماره تماس الزامی می باشد")
    .matches(/09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/, "شماره تماس معتبر وارد کنید"),
  password: Yup.string()
    .required("لطفا کلمه عبور را وارد کنید")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "کلمه عبور باید دارای8 حرف انگلیسی،عددوکارکترباشد"
    ),
  returnPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "کلمه عبور وتکرار آن یکسان نیست"
  ),
  
});
