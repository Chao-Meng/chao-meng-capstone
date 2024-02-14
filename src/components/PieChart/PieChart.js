import { ResponsivePie } from "@nivo/pie";
import { useState, useEffect } from "react";
import axios from "axios";
//import electricData from "../../data/electricData.json"
import "./PieChart.scss";
import colors from "../../styles/partials/variables.scss";

const PieChart = () => {
  const [electricData, setElectricData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/electricData");
        setElectricData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const theme = {
    labels: {
      text: {
        fontFamily: "Arial, sans-serif",
        fill: colors.White,
      },
    },
  };

  return (
    <div className="pieChart" style={{ height: 300 }}>
      <ResponsivePie
        data={electricData}
        theme={theme}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "accent" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      />
      <p className="pieChart__title">Percentage of total energy consumption</p>
    </div>
  );
};
export default PieChart;
