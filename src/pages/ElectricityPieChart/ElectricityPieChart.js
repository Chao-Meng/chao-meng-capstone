import Sidebar from "../../components/Sidebar/Sidebar";
import Piechart from "../../components/PieChart/PieChart";
import "./ElectricityPieChart.scss";

const ElectricityPieChart = () => {
  return (
    <div className="piechart__container">
      <Sidebar className="dashboard__sidebar" />
      <div className="piechart__container--small">
        <div className="piechart__chart">
          <Piechart className="piechart__pie" />
        </div>
        <p className="pieChart__title">
          Percentage of total energy consumption
        </p>
      </div>
    </div>
  );
};
export default ElectricityPieChart;
