import dataCards from "../../data/dataCards";
import Card from "../../components/Card/Card";
import "./Home.css";

const Home = () => {
  return (
    <section className="cards">
      {dataCards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            img={card.img}
          />
        );
      })}
    </section>
  );
};

export default Home;
