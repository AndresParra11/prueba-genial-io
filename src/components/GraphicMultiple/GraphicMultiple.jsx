import PropTypes from "prop-types";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./GraphicMultiple.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const GraphicLine = ({ info }) => {
  return (
    <div className="graphic">
      <Line
        data={{
          labels: info.map((data) => data.label),
          datasets: [
            {
              label: "Minutes",
              data: info.map((data) => data.minutes),
              backgroundColor: "white",
              borderColor: "black",
              hoverBackgroundColor: "#08979a",
              borderWidth: 2,
              pointRadius: 4,
            },
            {
              label: "Minutes",
              data: info.map((data) => data.minutes2),
              backgroundColor: "white",
              borderColor: "rgba(155,155,155, 0.6)",
              hoverBackgroundColor: "#08979a",
              borderWidth: 2,
              pointRadius: 4,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.4,
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
                text: "Minutes",
              },
              grid: {
                color: "white",
              },
              ticks: {
                color: "black",
              },
              min: 20,
              max: 70,
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

GraphicLine.propTypes = {
  info: PropTypes.array.isRequired,
};

export default GraphicLine;
