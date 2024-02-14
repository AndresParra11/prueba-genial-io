import PropTypes from "prop-types";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./GraphicLine.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Graphic = ({ info }) => {
  return (
    <div className="graphic">
      <Line
        data={{
          labels: info.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: info.map((data) => data.revenue),
              backgroundColor: "white",
              borderColor: "black",
              hoverBackgroundColor: "#08979a",
              borderWidth: 2,
              pointRadius: 4,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.2,
            },
          },
          scales: {
            x: {
              title: {
                color: "#08979a",
                display: true,
                text: "Month",
              },
              grid: {
                color: "white",
              },
              ticks: {
                color: "black",
              },
            },
            y: {
              title: {
                color: "#08979a",
                display: true,
                text: "Revenue [$]",
              },
              grid: {
                color: "white",
              },
              ticks: {
                color: "black",
              },
              min: 10000,
              max: 16000,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

Graphic.propTypes = {
  info: PropTypes.array.isRequired,
};

export default Graphic;
