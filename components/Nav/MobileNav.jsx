import Image from "next/image";
import PrimaryBtn from "../utils/PrimaryBtn";
import { useState } from "react";
import Link from "next/link";
import DarkModeButton from "../utils/DarkBtn";
import { RxCross2 } from "react-icons/rx";
import { CgMenuLeft } from "react-icons/cg";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full flex justify-between items-center z-50'>
      <div>
        <button
          className='z-50 cursor-pointer  p-2'
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
        >
          <CgMenuLeft className='text-6xl' />
        </button>
        <div
          className={`bg-bgLight-50  dark:bg-bgDark-200   fixed top-0 left-0 transition-all duration-150  ${
            isOpen ? "w-full h-screen" : "w-40 h-40 hidden"
          }`}
        >
          {/* content */}
          <div className='flex flex-col justify-center items-center h-full'>
            <button
              className='z-50 cursor-pointer absolute left-0 top-0 p-6'
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false);
                } else {
                  setIsOpen(true);
                }
              }}
            >
              <RxCross2 className='text-6xl' />
            </button>
            {["home", "our team", "services"].map((name, index) => (
              <Link
                key={index}
                href='#'
                className={`text-2xl text-typoLight-300 font-medium leading-7 my-9 pb-2 hover:text-primary-400 transition-all duration-75`}
              >
                {name}
              </Link>
            ))}
            <div className='absolute bottom-8'>
              <DarkModeButton />
            </div>
          </div>
        </div>
      </div>
      <div>
        <PrimaryBtn text='contract' />
      </div>
    </div>
  );
};

export default MobileNav;
