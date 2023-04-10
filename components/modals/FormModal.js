import { useState } from "react";

const FormModal = () => {
  const [hide,setHide]=useState(false)
  const clickHandler= ()=>{
    setHide(true)
  }
  return (
    <div className={hide?" hidden":"bg-[#FFE8C5] p-8 w-[440px] h-[240px] rounded-[16px] dark:bg-[#33379C]"}>
      <span className="ml-44 text-black dark:text-white mt-[40px]">gg</span>
      <p className="ml-5 mb-10 mt-[28px] text-black dark:text-white">
        The form has been submitted successfully
      </p>
      <span onClick={clickHandler} className="bg-primary-400 cursor-pointer ml-36 m-32 text-white p-2  rounded dark:bg-primary-50 dark:text-black">
        Confirm
      </span>
    </div>
  );
};

export default FormModal;
