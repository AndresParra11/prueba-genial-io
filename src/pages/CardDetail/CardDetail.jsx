import { useParams } from "react-router-dom";
import dataCards from "../../data/dataCards";
import GraphicLine from "../../components/GraphicLine/GraphicLine";
import GraphicBar from "../../components/GraphicBar/GraphicBar";
import GraphicMultiple from "../../components/GraphicMultiple/GraphicMultiple";
import Payments from "../../components/Payments/Payments";
import "./CardDetail.css";

const CardDetail = () => {
  const { id } = useParams();

  const { data } = dataCards.find((card) => card.id === id);

  return (
    <article className="article">
      <section className={id === "4" ? "section4" : "section"}>
        <div className="section__info">
          <h1
            className={
              id === "3" || id === "4" ? "section__title3" : "section__title"
            }
          >
            {data.title}
          </h1>
          <p className="section__value">{data.value}</p>
          <p
            className={
              id === "3" ? "section__description3" : "section__description"
            }
          >
            {data.description}
          </p>
        </div>
        {id === "1" ? (
          <GraphicLine info={data.info} />
        ) : id === "2" ? (
          <GraphicBar info={data.info} />
        ) : id === "3" ? (
          <GraphicMultiple info={data.info} />
        ) : id === "4" ? (
          <Payments info={data.info} />
        ) : null}
      </section>
    </article>
  );
};

export default CardDetail;
