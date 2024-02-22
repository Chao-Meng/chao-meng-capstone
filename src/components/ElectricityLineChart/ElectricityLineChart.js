import { useEffect, useState } from "react";
import LineChart from "../LineChart/LineChart";
const ElectricityLineChart = () => {
  const [energyData, setEnergyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/energyData")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = [
          {
            id: "energyConsumption",
            color: "#FFFFFF",
            data: data.map((series) => series.data[0]),
          },
        ];
        console.log("Transformed data for Nivo:", transformedData);
        setEnergyData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <LineChart
        data={energyData}
        title="eletricity"
        vertical="Energy Consumption KW/h"
      />{" "}
    </>
  );
};

export default ElectricityLineChart;
