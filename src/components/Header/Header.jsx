import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  return (
    <header className="header">
      <figure className="header__logo">
        <img
          src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1707849535/genial-io/logo_e2lyma.svg"
          alt="logo-genial-io"
        />
      </figure>
      <div className="header__links">
        <Link
          className={`header__link ${activeLink === "/" ? "active" : ""}`}
          to="/"
          onClick={() => setActiveLink("/")}
        >
          Inicio
        </Link>
        <Link
          className={`header__link ${activeLink === "/card/1" ? "active" : ""}`}
          to="/card/1"
          onClick={() => setActiveLink("/card/1")}
        >
          Card 1
        </Link>
        <Link
          className={`header__link ${activeLink === "/card/2" ? "active" : ""}`}
          to="/card/2"
          onClick={() => setActiveLink("/card/2")}
        >
          Card 2
        </Link>
      </div>
    </header>
  );
};

export default Header;
