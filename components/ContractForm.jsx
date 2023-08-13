import React, { useState } from "react";
import axios from "axios";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { validationSchema } from "@/helpers/formValid/FormValid";
import { useFormik } from "formik";
// import FormModal from "./modals/FormModal";

const ContractForm = () => {
  const [hide, setHide] = useState(true);
  const clickHandler= ()=>{
    setHide(true)
  }
  const onSubmit = async (values, { resetForm }) => {
    const data=values;
    try {

      setHide(false);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      subject: "",
      description: "",
    },
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-5 lg:grid grid-cols-6  gap-4"
      >
        <div className="md:col-span-2">
          <span className="bg-primary-400 text-white p-2  rounded  dark:bg-secondary-400 dark:text-black">
            Contract Form
          </span>
          <p className="mt-5 w-[318px] md:w-auto ">
            Fill out this form to get advice and give us your projects. By
            filling out this form, we will help you to start or improve your
            business in the best possible way.
          </p>
        </div>
        <div className="mt-16 md:mt-10 relative col-span-4 md:ml-16">
          <div className="md:flex">
            <div>
              <label className="block ">Name</label>
              <input
                name="full_name"
                {...formik.getFieldProps("full_name")}
                className="w-[320px] h-[48px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2 border-primary-400 dark:focus:bg-bgDark-50 dark:bg-bgDark-200"
                type="text"
              />
              {formik.errors.full_name && formik.touched.full_name && (
                <div className="text-red-500">{formik.errors.full_name}</div>
              )}
            </div>
            <div className="md:ml-[65px]">
              <label className="block mt-5 md:mt-0 ">Email</label>
              <input
                name="email"
                {...formik.getFieldProps("email")}
                className="w-[320px] h-[48px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400 dark:focus:bg-bgDark-50 dark:bg-bgDark-200"
                type="text"
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <label className="block mt-5">Subject</label>
          <input
            name="subject"
            {...formik.getFieldProps("subject")}
            className="w-[320px] h-[48px] md:w-[710px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400 dark:focus:bg-bgDark-50 dark:bg-bgDark-200"
            type="text"
          />

          {formik.errors.subject && formik.touched.subject && (
            <div className="text-red-500">{formik.errors.subject}</div>
          )}
          <label className="block mt-5">Explanes</label>

          <textarea
            name="description"
            {...formik.getFieldProps("description")}
            className="w-[320px] h-[200px] resize-none md:w-[710px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400 dark:focus:bg-bgDark-50 dark:bg-bgDark-200"
            type="text"
          />
          {formik.errors.description && formik.touched.description && (
            <div className="text-red-500">{formik.errors.description}</div>
          )}

          <div className="flex justify-center mt-5 mb-5 md:justify-start ">
            <button
              type="submit"
              className="bg-primary-400 dark:bg-primary-50 rounded-lg w-28 md:w-32 h-12 text-typoDark-200 dark:text-typoLight-600 shadow-[1px_4px_16px_rgba(118,71,235,0.2)] dark:shadow-[2px_4px_16px_rgba(195,197,248,0.3)] leading-7 text-lg font-medium z-40"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div
        className={
          hide ? "hidden" : "  text-white "
        }
      >
        
        <div
          className={
               "bg-[#FFE8C5] relative p-8 top-[-350px] w-[320px] h-[240px] rounded-[16px] dark:bg-[#33379C] md:w-[440px] md:left-[350px]"
          }
        >
          <span className=" absolute top-0 left-[140px] text-black  dark:text-white mt-[40px] md:left-[190px]">
            <AiOutlineCheckCircle size={45} />
          </span>
          <p className=" mb-10 mt-[68px] text-black  dark:text-white md:ml-5">
            The form has been submitted successfully
          </p>
          <span
            onClick={clickHandler}
            className="bg-primary-400 cursor-pointer  ml-24 text-white p-2  rounded dark:bg-primary-50 dark:text-black md:ml-36"
          >
            Confirm
          </span>
        </div>
      </div>
    </>
  );
};

export default ContractForm;
