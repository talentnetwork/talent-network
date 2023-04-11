"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isDark, setIsDark] = useState(theme === "dark" ? true : false);

  return (
    <>
      <label htmlFor='dark-btn'>
        <div className='w-24 h-12 rounded-[100px] bg-white shadow-[1px_2px_12px_rgba(0,0,0,0.12)] dark:shadow-[1px_2px_12px_rgba(67,69,103,0.4)] dark:bg-bgDark-50 flex items-center px-1 cursor-pointer dark:flex-row-reverse transition-all duration-150 z-50'>
          <div>
            <svg
              className='dark:hidden'
              width='35'
              height='36'
              viewBox='0 0 35 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.3834 18.7C1.9834 27.2833 9.26673 34.2667 17.9834 34.65C24.1334 34.9167 29.6334 32.05 32.9334 27.5333C34.3001 25.6833 33.5667 24.45 31.2834 24.8667C30.1667 25.0667 29.0167 25.15 27.8167 25.1C19.6667 24.7667 13.0001 17.95 12.9667 9.9C12.9501 7.73333 13.4001 5.68333 14.2167 3.81666C15.1167 1.75 14.0334 0.766663 11.9501 1.65C5.35007 4.43333 0.833402 11.0833 1.3834 18.7Z'
                stroke='#3E3E3E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              className='hidden dark:block'
              width='36'
              height='36'
              viewBox='0 0 36 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.9999 1.33331V2.99998M17.9999 33V34.6667M29.785 6.21488L28.6065 7.39339M7.39333 28.6066L6.21482 29.7851M34.6666 18H32.9999M2.99992 18H1.33325M29.785 29.7851L28.6065 28.6066M7.39333 7.39339L6.21482 6.21488M27.9999 18C27.9999 23.5228 23.5228 28 17.9999 28C12.4771 28 7.99992 23.5228 7.99992 18C7.99992 12.4771 12.4771 7.99998 17.9999 7.99998C23.5228 7.99998 27.9999 12.4771 27.9999 18Z'
                stroke='#F6F6F6'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div>
            <svg
              className='dark:hidden'
              width='55'
              height='50'
              viewBox='0 0 55 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_44_216)'>
                <circle cx='29' cy='25' r='20' fill='#33379C' />
              </g>
              <defs>
                <filter
                  id='filter0_d_44_216'
                  x='0'
                  y='-3'
                  width='60'
                  height='60'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='1' dy='2' />
                  <feGaussianBlur stdDeviation='5' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.9175 0 0 0 0 0.52848 0 0 0 0 0.309656 0 0 0 0.2 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_44_216'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_44_216'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
            <svg
              className='hidden dark:block'
              width='57'
              height='50'
              viewBox='0 0 57 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_78_870)'>
                <circle cx='26' cy='25' r='20' fill='#FFC56F' />
              </g>
              <defs>
                <filter
                  id='filter0_d_78_870'
                  x='-3'
                  y='-3'
                  width='60'
                  height='60'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='1' dy='2' />
                  <feGaussianBlur stdDeviation='5' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.9175 0 0 0 0 0.52848 0 0 0 0 0.309656 0 0 0 0.2 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_78_870'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_78_870'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </label>
      <input
        type='checkbox'
        onChange={() =>
          theme == "dark" ? setTheme("light") : setTheme("dark")
        }
        id='dark-btn'
        className='hidden'
      />
    </>
  );
};

export default DarkModeButton;
