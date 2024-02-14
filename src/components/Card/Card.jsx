import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, description, img }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <Link to={`/card/${id}`}>
        <figure className="card__figure">
          <img src={img} alt="" />
        </figure>
      </Link>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
