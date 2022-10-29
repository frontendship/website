import React from 'react';
import logo from '../Icon/FrontendshipLogo.png';
import Image from 'next/image';
import styles from './Footer.module.css';
import FooterData from './FooterData.json';

const Footer = () => {
  const data = FooterData.map((data) => (
    <div
      key={data.id}
      className="bg-purple-900 flex flex-row items-center w-full "
    >
      <div className="w-full">
        <div className="font-sans text-white  text-[20px] leading-5">
          {data.header}
        </div>
        <ul>
          {data.content.map((singleContent, i) => (
            <li key={i}>{singleContent}</li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <footer className="w-full bg-red-900">
      <div>
        <div>{data}</div>
        <div>
          <div>Subscribe Circle Newsletter</div>
          <div>
            Subscribe to be the first one to know about updates. Enter your
            email
          </div>
          <div>
            <input className="" placeholder="Email Address" />
            <button></button>
          </div>
        </div>
      </div>
      <div className="h-24 bg-blue-900">
        <Image src={logo} alt="logo" width="153px" height="40px" />
      </div>
    </footer>
  );
};

export default Footer;
