import React from "react";

const ContractForm = () => {
  return (
    <section className="mt-5 md:grid grid-cols-6 gap-4">
      <div className="md:col-span-2">
        <span className="bg-primary-400 text-white p-2  rounded">
          Contract Form
        </span>
        <p className="mt-5 ">
          Fill out this form to get advice and give us your projects. By filling
          out this form, we will help you to start or improve your business in
          the best possible way.
        </p>
      </div>
      <div className="mt-16 md:mt-10 col-span-4 ml-16">
        <div className="md:flex">
          <div>
            <label className="block ">Name</label>
            <input
              className="w-[320px] h-[48px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2 border-primary-400"
              type="text"
            />
          </div>
          <div className="md:ml-[65px]">
            <label className="block mt-5 md:mt-0 ">Email</label>
            <input
              className="w-[320px] h-[48px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400"
              type="text"
            />
          </div>
        </div>
        <label className="block mt-5">Subject</label>
        <input
          className="w-[320px] h-[48px] md:w-[710px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400"
          type="text"
        />
        <label className="block mt-5">Explanes</label>
        <textarea
          className="w-[320px] h-[200px] resize-none md:w-[710px]  rounded-lg bg-bgLight-200 focus:bg-white focus:border-2  border-primary-400"
          type="text"
        />
      </div>
    </section>
  );
};

export default ContractForm;
