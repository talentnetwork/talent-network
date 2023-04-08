import React from "react";
import axios from "axios";
import { useFormik } from "formik";

const ContractForm = () => {
  const onSubmit = async (values) => {
    let token = `Bearer ${localStorage.getItem("token")}`;

    addDoctor(values, token);
  };
  const initialValues = {
    full_name: "",
    email: "",
    subject: "",
    description: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationSchemaDoctor,
    validateOnMount: true,
  });
  return (
    <section className='mt-5 md:grid grid-cols-6 gap-4'>
      <div className='md:col-span-2'>
        <span className='bg-primary-400 text-white p-2  rounded'>
          Contract Form
        </span>
        <p className='mt-5 w-[318px] md:w-auto '>
          Fill out this form to get advice and give us your projects. By filling
          out this form, we will help you to start or improve your business in
          the best possible way.
        </p>
      </div>
      <div className='mt-16 md:mt-10 col-span-4 md:ml-16'>
        <div className='md:flex'>
          <div>
            <label className='block '>Name</label>
            <input
              name='full_name'
              {...formik.getFieldProps("full_name")}
              className='w-[320px] h-[48px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2 border-primary-400'
              type='text'
            />
          </div>
          <div className='md:ml-[65px]'>
            <label className='block mt-5 md:mt-0 '>Email</label>
            <input
              name='email'
              {...formik.getFieldProps("email")}
              className='w-[320px] h-[48px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400'
              type='text'
            />
          </div>
        </div>
        <label className='block mt-5'>Subject</label>
        <input
          name='subject'
          {...formik.getFieldProps("subject")}
          className='w-[320px] h-[48px] md:w-[710px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400'
          type='text'
        />
        <label className='block mt-5'>Explanes</label>
        <textarea
          name='description'
          {...formik.getFieldProps("description")}
          className='w-[320px] h-[200px] resize-none md:w-[710px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400'
          type='text'
        />
      </div>
    </section>
  );
};

export default ContractForm;
