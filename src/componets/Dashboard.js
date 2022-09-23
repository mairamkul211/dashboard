import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5mb-3 mt-3">
            <Line
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                datasets: [
                  {
                    label: "Red",
                    data: [
                      12, 34, 56, 102, 676, 98, 46, 461, 576.981, 746, 423,
                    ],
                    borderColor: "red",
                    backgroundColor: "red",
                  },
                  {
                    label: "Blue",
                    data: [
                      105, 134, 156, 12, 676, 8, 26.756, 32, 465, 398, 645,
                    ],
                    borderColor: "blue",
                    backgroundColor: "blue",
                  },
                  {
                    label: "Black",
                    data: [
                      900, 224, 556, 762, 676, 80, 326, 956, 32, 465, 398, 645,
                    ],
                    borderColor: "black",
                    backgroundColor: "black",
                  },
                  {
                    label: "Green",
                    data: [
                      400, 124, 656, 862, 576, 180, 426, 756, 432, 765, 798,
                      345,
                    ],
                    borderColor: "green",
                    backgroundColor: "green",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Dashboard",
                    font: { size: 25 },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: true,
                    },
                    title: {
                      display: true,
                      text: "Data in Months",
                      font: { size: 25 },
                    },
                  },
                  y: {
                    grid: {
                      display: true,
                    },
                    title: {
                      display: true,
                      text: "Data in Months",
                      font: { size: 25 },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
