import "./header.scss";
import { Link, useLocation } from "react-router-dom";

import logo from "./../../assets/tmovie.png";

const headerNav = [
  { label: "Home", path: "/" },
  { label: "Movies", path: "/movie" },
  { label: "TV Series", path: "/tv" },
];

const Header = () => {
  const { pathname: currentPath } = useLocation();
  const currentPage = headerNav.findIndex((elem) => elem.path === currentPath);

  return (
    <div className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} />
          <Link to="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((elem, idx) => (
            <li
              key={elem.label}
              className={`${currentPage === idx ? "active" : ""}`}
            >
              <Link to={elem.path}>{elem.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
