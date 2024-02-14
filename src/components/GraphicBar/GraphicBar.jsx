import { Chart as ChartJS, defaults, plugins } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import "./GraphicBar.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const GraphicBar = ({ info }) => {
  return (
    <>
      <div className="graphic">
        <Bar
          data={{
            labels: info.map((data) => data.label),
            datasets: [
              {
                label: "count",
                data: info.map((data) => data.subscriptions),
                backgroundColor: [
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                ],
                borderRadius: 5,
                hoverBackgroundColor: "#08979a",
                
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
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
              },
              y: {
                title: {
                  color: "#08979a",
                  display: true,
                  text: "Subscriptions",
                },
                grid: {
                  color: "white",
                },
                min: 0,
                max: 2500,
              },
            },
          }}
        />
      </div>
    </>
  );
};

GraphicBar.propTypes = {
  info: PropTypes.array.isRequired,
};

export default GraphicBar;
