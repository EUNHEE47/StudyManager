/* eslint-disable react-hooks/exhaustive-deps */
import {
  faCalendar,
  faChair,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeBtn, setActiveBtn] = useState("");

  const navMenus = [
    {
      name: "회원관리",
      icon: <FontAwesomeIcon icon={faUser} />,
      path: "member",
    },
    {
      name: "좌석현황",
      icon: <FontAwesomeIcon icon={faChair} />,
      path: "seat",
    },
    {
      name: "예약관리",
      icon: <FontAwesomeIcon icon={faCalendar} />,
      path: "reservation",
    },
    {
      name: "사물함관리",
      icon: <FontAwesomeIcon icon={faKey} />,
      path: "locker",
    },
  ];

  const goToPage = (selectMenu) => {
    for (let i = 0; i < navMenus.length; i++) {
      if (selectMenu === navMenus[i].path) {
        navigate(`/${navMenus[i].path}`);
      }
    }
  };

  useEffect(() => {
    setActiveBtn(location.pathname);
  }, [location]);

  return (
    <div className="menubar">
      <div>
        <p>ㅇㅇㅇ님</p>
        <button>로그아웃</button>
      </div>
      <ul>
        {navMenus.map((item, index) => (
          <li
            key={index}
            onClick={() => goToPage(`${item.path}`)}
            className={`${activeBtn === `/` + item.path ? "activeBtn" : ""}`}
          >
            {item.icon}&nbsp;&nbsp;{item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
