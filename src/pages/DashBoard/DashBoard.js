import "./DashBoard.scss";
import Header from "../../components/Header/Header"
import PieChart from "../../components/PieChart/PieChart"
import LineChart  from "../../components/LineChart/LineChart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
const DashBoard=()=>{
    return(
    <div className="dashboard">
      <Header className="dashboard__header" title="Dashboard"  subtitle="Welcome to Energy Dashboard"/>
      <div className="dashboard__container">
        <div className="dashboard__container--header">
          <div className="dashboard__container--title">
            <p className="dashboard__container--h5">Energy Consumption</p>
            <h3 className="dashboard__container--h3">$xxxxxxx</h3>
          </div>
          <div className="dashboard__container-actions">
            <button className="dashboard__container--download">
            <DownloadOutlinedIcon/>
            </button>
          </div>
        </div>
        <div className="dashboard__chart">
          <div><PieChart/></div>
         <div><LineChart /></div> 
        </div>
      </div>
    </div>)
}
export default DashBoard