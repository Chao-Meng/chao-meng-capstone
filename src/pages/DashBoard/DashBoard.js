import "./DashBoard.scss";
import Header from "../../components/Header/Header";
import PieChart from "../../components/PieChart/PieChart";
import ElectricityLineChart from "../../components/ElectricityLineChart/ElectricityLineChart";
import WaterLineChart from "../../components/WaterLineChart/WaterLineChart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
const DashBoard = () => {
  return (
    <div className="dashboard">
      <Sidebar className="dashboard__sidebar" />
      <section className="dashboard__container--big">
        <Topbar />
        <Header
          className="dashboard__header"
          title="Dashboard"
          // subtitle="Welcome to Energy Dashboard"
        />
        <div className="dashboard__container">
          <div className="dashboard__container--header">
            <div className="dashboard__container--title">
              {/* <p className="dashboard__container--h5">Energy Consumption</p>
              <h3 className="dashboard__container--h3">xxxxxxx</h3> */}
            </div>
            {/* <div className="dashboard__container-actions">
              <button className="dashboard__container--download">
                <DownloadOutlinedIcon />
              </button>
            </div> */}
          </div>
          <div className="dashboard__chart">
            <div>
              <PieChart />
            </div>
            <div>
              <ElectricityLineChart />
            </div>
            <div>
              <WaterLineChart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DashBoard;
