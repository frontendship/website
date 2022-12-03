import React from 'react'
import logo from '../../base/Icon/FrontendshipLogo.png'
import Image from 'next/image'
import styles from './Footer.module.css'
import FooterData from './FooterData.json'

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
  ))

  return (
    <footer className={styles.container}>
      <div className={styles.footerSection}>
        <div className={styles.linksSide}>{data}</div>
        <div className={styles.mailSide}>
          <div className={styles.subsText}>Subscribe Circle Newsletter</div>
          <div className={styles.subsMailText}>
            Subscribe to be the first one to know about updates. <br /> Enter
            your email
          </div>
          <div className={styles.mailInputContainer}>
            <input
              placeholder="Email Address"
              type={'email'}
              className={styles.mailInput}
            />
            <button className={styles.mailInputButton}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <Image src={logo} alt="logo" width="153px" height="40px" />
      </div>
    </footer>
  )
}

export default Footer
