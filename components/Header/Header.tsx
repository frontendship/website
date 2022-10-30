import style from "./Header.module.css";
import Icon from "../Icon/Icon";
import logo from "./logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";




const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    console.log('sefsgf')
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,

      });
    };
    window.addEventListener("resize", handleResize);
    handleResize()

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    console.log('sefsgfxxxxxx')
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <div className={style.logo}>
          <Image src={logo} />
        </div>
        <nav className={`${style.navbar} ${menuOpen && size.width < 768 ? style['hamburger'] : style['close']}`}>

          <ul className={style.mainMenu}>

            {(size.width > 768 || menuOpen) && ([
              { name: "Anasayfa", link: "/", isActive: true },
              { name: "Discord", link: "/discord" },
              { name: "Blog", link: "/blog" },
              { name: "Etkinlikler", link: "events" },
            ].map((item: any) => (
              <li key={item.name}>
                <a
                  className={`${style.link} ${item.isActive && style.linkActive
                    }`}
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            )))}
          </ul>


        </nav>
      </div>

      <div className={style.headerRight}>
        <button className={style.firstInput}>Discorda Katıl</button>


        {size.width < 768 && (<div className={style.toggle}>
          {menuOpen ? (
            <Icon icon="close" onClick={menuToggleHandler} />
          ) : (
            <Icon icon="hamburger" onClick={menuToggleHandler} />
          )}
        </div>)}
     {/*    <ul className={`md:flex md:items-center md:gap-8 pb-8 md:pb-0 transition-all duration-500 ease-in ${menuOpen ? '' : 'hidden'}`}>
          {links.map((link) => (
            <li key={link.name} className="my-7 md:my-0"><a href={link.link} className="text-xl text-gray-800 hover:text-gray-400 duration-500">{link.name}</a></li>
          ))}
          <button>
            Get Started
          </button>
        </ul>  */}
     {/*    <ul className={`md:flex md:items-center md:gap-8 pb-8 md:pb-0 transition-all duration-500 ease-in ${menuOpen ? '' : 'hidden'}`}>

          {(size.width > 768 || menuOpen) && ([
            { name: "Anasayfa", link: "/", isActive: true },
            { name: "Discord", link: "/discord" },
            { name: "Blog", link: "/blog" },
            { name: "Etkinlikler", link: "events" },
          ].map((item: any) => (
            <li key={item.name} className="my-7 md:my-0">
              <a
                className={"text-xl text-gray-800 hover:text-gray-400 duration-500"}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          )))}
        </ul> */}

      </div>

    </div>



  );
};










export default Header;
