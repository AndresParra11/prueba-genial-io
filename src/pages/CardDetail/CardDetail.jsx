import { useParams } from "react-router-dom";
import dataCards from "../../data/dataCards";
import GraphicLine from "../../components/GraphicLine/GraphicLine";
import GraphicBar from "../../components/GraphicBar/GraphicBar";
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
        {id === "1" ? (
          <GraphicLine info={data.info} />
        ) : id === "2" ? (
          <GraphicBar info={data.info} />
        ) : null}
      </section>
    </article>
  );
};

export default CardDetail;
