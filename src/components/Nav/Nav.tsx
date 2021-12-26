import "./Nav.scss";
import { BsStarFill } from "react-icons/bs";
import { MdGames } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { ImWrench } from "react-icons/im";
import { FaUserNinja } from "react-icons/fa";
import { SubItem } from "./SubItem";

export const Nav = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <a href="./">
          <img className="Header__logoImage" src="./logo.png" alt="logo" />
        </a>
      </div>
      <ul className="Header__main">
        <li className="Header__item">
          <a className="Header__itemHover">
            <MdGames className="Header__mainIcon" />
            <span className="Header__mainLabel">本体・amiibo</span>
          </a>
        </li>
        <li className="Header__item">
          <a className="Header__itemHover">
            <BsStarFill className="Header__mainIcon" />
            <span className="Header__mainLabel">ゲーム</span>
          </a>
        </li>
        <li className="Header__item">
          <a className="Header__itemHover">
            <RiArticleLine className="Header__mainIcon" />
            <span className="Header__mainLabel">トピックス</span>
          </a>
        </li>
        <li className="Header__item">
          <a className="Header__itemHover">
            <FaUserNinja className="Header__mainIcon" />
            <span className="Header__mainLabel">キャラクター</span>
          </a>
        </li>
        <li className="Header__item">
          <a className="Header__itemHover">
            <ImWrench className="Header__mainIcon" />
            <span className="Header__mainLabel">サポート</span>
          </a>
        </li>
      </ul>
      <ul className="Header__sub">
        <SubItem type="さがす" />
        <SubItem type="ストア" />
        <SubItem type="ログイン" />
      </ul>
    </div>
  );
};
