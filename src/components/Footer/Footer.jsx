import dataSocial from "../../data/dataSocial";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h1 className="footer__title">Contáctanos</h1>
        <div className="social__container">
          {dataSocial.map((social) => (
            <figure key={social.id} className="footer__social">
              <a href={social.link} className="footer__link">
                <img
                  src={social.img}
                  alt={social.description}
                  className={
                    social.description === "Facebook"
                      ? "footer__facebook"
                      : "footer__icon"
                  }
                />
              </a>
            </figure>
          ))}
        </div>
      </div>
      <figure className="footer__logo">
        <img
          src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1707849535/genial-io/logo_e2lyma.svg"
          alt="logo-genial-io"
        />
      </figure>
    </footer>
  );
};

export default Footer;
