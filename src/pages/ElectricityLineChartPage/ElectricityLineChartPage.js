import ElectricityLineChart from "../../components/ElectricityLineChart/ElectricityLineChart";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./ElectricityLineChartPage.scss";

const ElectricityLineChartPage = () => {
  return (
    <>
      <div className="piechart__container">
        <Sidebar className="dashboard__sidebar" />
        <div className="piechart__container--small">
          <div className="linechart__chart">
            <ElectricityLineChart className="piechart__pie" />
          </div>
          <p className="linechart__title">Monthly electricity consumption</p>
        </div>
      </div>
    </>
  );
};
export default ElectricityLineChartPage;
