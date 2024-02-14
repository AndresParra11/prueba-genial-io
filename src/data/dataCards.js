import infoCard1 from "../data/infoCard1.json";
import infoCard2 from "../data/infoCard2.json";

const dataCards = [
  {
    id: "1",
    title: "Card 1",
    description: "Gráfico de ventas mensuales",
    data: {
      title: "Total Revenue",
      value: "$15,231.89",
      description: "+20.1% from last month",
      info: infoCard1,
    },
    img: "https://res.cloudinary.com/dlkvt6uph/image/upload/v1707856630/genial-io/grafico1_fsljij.png",
  },
  {
    id: "2",
    title: "Card 2",
    description: "Gráfico de subscripciones mensuales",
    data: {
      title: "Subscriptions",
      value: "+2350",
      description: "+180.1% from last month",
      info: infoCard2,
    },
    img: "https://res.cloudinary.com/dlkvt6uph/image/upload/v1707856630/genial-io/grafico2_cm5l36.png",
  },
  {
    id: "3",
    title: "Card 3",
    description: "Gráfico de minutos de ejercicio",
    data: "Data 3",
    img: "https://res.cloudinary.com/dlkvt6uph/image/upload/v1707856638/genial-io/grafico3_idrxtt.png",
  },
  {
    id: "4",
    title: "Card 4",
    description: "Tabla para administrar pagos",
    data: "Data 4",
    img: "https://res.cloudinary.com/dlkvt6uph/image/upload/v1707856629/genial-io/grafico4_irdpfx.jpg",
  },
];

export default dataCards;
