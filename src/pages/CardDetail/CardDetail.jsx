import { useParams } from "react-router-dom";
import dataCards from "../../data/dataCards";
import GraphicLine from "../../components/GraphicLine/GraphicLine";
import "./CardDetail.css";

const CardDetail = () => {
  const { id } = useParams();

  const { data } = dataCards.find((card) => card.id === id);

  return (
    <article className="article">
      <section className="section">
        <div className="section__info">
          <h1 className="section__title">{data.title}</h1>
          <p className="section__value">{data.value}</p>
          <p className="section__description">{data.description}</p>
        </div>
        <GraphicLine info={data.info} />
      </section>
    </article>
  );
};

export default CardDetail;
