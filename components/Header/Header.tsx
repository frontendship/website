import style from "./Header.module.css";
import logo from "./logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <div className={style.logo}>
          <Image src={logo} />
        </div>
        <nav className={style.navbar}>
          <ul>
            {[
              { name: "Anasayfa", link: "/", isActive: true },
              { name: "Discord", link: "/discord" },
              { name: "Blog", link: "/blog" },
              { name: "Etkinlikler", link: "events" },
            ].map((item: any) => (
              <li key={item.name}>
                <a
                  className={`${style.link} ${
                    item.isActive && style.linkActive
                  }`}
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={style.headerRight}>
        <button>Discorda Katıl</button>
      </div>
    </div>
  );
};

export default Header;
