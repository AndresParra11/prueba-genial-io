import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import dataCards from "../../data/dataCards";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  return (
    <header className="header">
      <figure className="header__logo" onClick={() => navigate("/")}>
        <img
          src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1707849535/genial-io/logo_e2lyma.svg"
          alt="logo-genial-io"
          onClick={() => navigate("/")}
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
        {dataCards.map((card) => (
          <Link
            key={card.id}
            className={`header__link ${
              activeLink === `/card/${card.id}` ? "active" : ""
            }`}
            to={`/card/${card.id}`}
            onClick={() => setActiveLink(`/card/${card.id}`)}
          >
            {card.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
