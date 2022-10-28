import Icon from "../Icon/Icon";
import style from "./Header.module.css";
declare module "*.jpg";
declare module "*.png";


const Header = () => {
  return (
    <div className={style.header}>

      
      <nav className={style["container flex justify-around py-8  mx-auto border-line"]}>

        <div className="flex items-center">
        <img src="logo.png" className={style["logo"]} alt='logo' />
        <h3 className={style['logoTitle']}><b>Frontend</b><span>ship</span></h3>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <a href="#" className={style['anasayfa']}>Anasayfa</a>
          <a href="#" className={style['discord']}>Discord</a>
          <a href="#" className={style['blog']}>Blog</a>
          <a href="#" className={style['etkinlikler']}>Etkinlikler</a>
        </div>

        <div className={style["flex items-center space-x-2 "]}>
          <button className={style["discorda-katil"]}>
            Discorda Katil
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
