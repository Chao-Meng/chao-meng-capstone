import { useEffect, useState } from "react";
import LineChart from "../LineChart/LineChart";
const WaterLineChart = () => {
  const [waterData, setWaterData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/waterData")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = [
          {
            id: "waterConsumption",
            color: "#FFFFFF",
            data: data.map((series) => series.data[0]),
          },
        ];
        console.log("Transformed data for Nivo:", transformedData);
        setWaterData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <LineChart data={waterData} title="water" />{" "}
    </>
  );
};

export default WaterLineChart;
