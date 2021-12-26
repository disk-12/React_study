import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill, BsCart3, BsStarFill } from "react-icons/bs";
import { MdGames } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { ImWrench } from "react-icons/im";
import { FaUserNinja } from "react-icons/fa";

type Props = { type: "さがす" | "ストア" | "ログイン" };

export const SubItem: React.FC<Props> = ({ type }) => {
  return (
    <li className="Header__subItem">
      <a className="Header__buttonHover">
        {type == "さがす" && <AiOutlineSearch className="Header__subIcon" />}
        {type == "ストア" && <BsCart3 className="Header__subIcon" />}
        {type == "ログイン" && <BsFillPersonFill className="Header__subIcon" />}
        <span className="Header__label">{type}</span>
      </a>
    </li>
  );
};
