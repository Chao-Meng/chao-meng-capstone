import Sidebar from "../../components/Sidebar/Sidebar";
import WaterLineChart from "../../components/WaterLineChart/WaterLineChart";
import "./WaterLineChartPage.scss";

const WaterLineChartPage = () => {
  return (
    <div className="piechart__container">
      <Sidebar className="dashboard__sidebar" />
      <div className="piechart__container--small">
        <div className="linechart__chart">
          <WaterLineChart className="piechart__pie" />
        </div>
        <p className="linechart__title">Monthly water consumption</p>
      </div>
    </div>
  );
};
export default WaterLineChartPage;
