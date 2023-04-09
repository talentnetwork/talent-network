import { useState } from "react";

const FormModal = () => {
  const [hide,setHide]=useState(false)
  const clickHandler= ()=>{
    setHide(true)
  }
  return (
    <div className={hide?" hidden":"bg-white w-[440px] h-[240px] rounded-[16px]"}>
      <span>gg</span>
      <p className="ml-10 mt-[50] text-black">
        The form has been submitted successfully
      </p>
      <span onClick={clickHandler} className="bg-primary-400 cursor-pointer text-white p-2  rounded">
        Confirm
      </span>
    </div>
  );
};

export default FormModal;
