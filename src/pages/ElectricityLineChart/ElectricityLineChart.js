import LineChart from "../../components/LineChart/LineChart";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./ElectricityLineChart.scss";

const ElectricityLineChart = () => {
  return (
    <>
      <Sidebar className="dashboard__sidebar" />
      <LineChart />
    </>
  );
};
export default ElectricityLineChart;
