import Icon from "../Icon/Icon";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      Header
      <Icon icon="atom" size={20} />
    </div>
  );
};

export default Header;
