import React, { useState } from 'react';
import logo from '../Icon/FrontendshipLogo.png';
import Image from 'next/image';
import styles from './Footer.module.css';
import FooterData from './FooterData.json';
import Link from 'next/link';

const Footer = () => {
  const data = FooterData.map((data) => (
    <div key={data.id} className="flex flex-row items-center w-full ">
      <div className="w-full ">
        <div className="font-sans text-white text-xl md:text-xl lg:text-2xl leading-5 divide-y-8 underline-offset-8 underline decoration-1 my-4 md:mb-8 md:mt-0 ">
          {data.header}
        </div>
        <ul>
          {data.content.map((data2, i) => (
            <li key={i} className="mb-2 md:mb-6">
              <a rel="noreferrer" target="_blank" href={data2.href}>
                <span className="text-[#E7E7E7] text-sm md:text-sm lg:text-base ">
                  {data2.title}
                </span>
              </a>
            </li>
          ))}{' '}
        </ul>
      </div>
    </div>
  ));

  return (
    <footer className="w-full bg-primary-blue-300">
      <div className="flex lg:justify-between lg:mx-[135px] md:pt-[78px] md:pb-[85px] flex-col md:flex-row ">
        <div className="text-center w-full pt-2 md:flex md:items-start  md:text-left md:pt-0 md:w-3/4 ">
          {data}
        </div>
        <div className="flex flex-col items-center text-center mt-4 md:w-1/4 md:text-left md:mt-0 lg:w-1/3 ">
          <div className="text-white text-lg md:w-full md:text-xl md:mb-5 ">
            Subscribe Circle Newsletter
          </div>
          <div className="text-[#e7e7e7]  md:text-base md:mb-8 w-full">
            Subscribe to be the first one to know about updates. <br /> Enter
            your email
          </div>
          <div className="relative inline-block w-72 h-12 mb-5 md:w-full ">
            <input
              placeholder="Email Address"
              type={'email'}
              className="rounded-xl border border-solid border-gray-500 text-white bg-transparent mt-2 h-full pl-2 w-full text-sm focus:outline-none  "
            />
            <button className="bg-white text-black rounded-xl h-full right-[1px] mt-2 absolute text-xs px-2 md:px-4 lg:px-6 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary-blue-400 py-7 flex justify-center ">
        <Image src={logo} alt="logo" width="153px" height="40px" />
      </div>
    </footer>
  );
};

export default Footer;
