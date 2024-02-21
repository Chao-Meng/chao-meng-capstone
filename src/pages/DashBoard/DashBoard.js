import { useState } from "react";
import "./DashBoard.scss";
import Header from "../../components/Header/Header";
import PieChart from "../../components/PieChart/PieChart";
import ElectricityLineChart from "../../components/ElectricityLineChart/ElectricityLineChart";
import WaterLineChart from "../../components/WaterLineChart/WaterLineChart";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
// import ExploreIcon from "@mui/icons-material/Explore";
// import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import building from "../../assets/images/building.png";

// import { tokens } from "../../theme";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { MenuItem } from "react-pro-sidebar";

const DashBoard = () => {
  //const [selected, setSelected] = useState("");
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
          {/* <div className="dashboard__container--header">
            <div className="dashboard__container--title">
              <p className="dashboard__container--h5">Energy Consumption</p>
              <h3 className="dashboard__container--h3">xxxxxxx</h3> 
            </div>*/}
          {/* <div className="dashboard__container-actions">
              <button className="dashboard__container--download">
                <DownloadOutlinedIcon />
              </button>
            </div>
          </div> */}
          <div className="dashboard__chart">
            <div>
              <PieChart />
              <p className="pieChart__title">
                Percentage of total energy consumption
              </p>
            </div>
            <div>
              <ElectricityLineChart />
            </div>
            <div>
              <WaterLineChart />
            </div>
          </div>
          <div className="dashboard__middlenCol">
            <div className="dashboard__icons">
              <div>
                <FlashOnIcon className="dashboard__icon" />
                <p>
                  total power:
                  <br />
                  xxxxkwh
                </p>
              </div>
              <div>
                <WaterDropIcon className="dashboard__icon" />
                <p>
                  total water:
                  <br />
                  xxxxkwh
                </p>
              </div>
            </div>
            <div className="dashboard__building">
              <img src={building} className="dashboard__img" />
            </div>
            <div className="dashboard__alarm">
              <p>Alarm data</p>
            </div>
          </div>
          <div className="dashboard__other">
            <p>whether</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DashBoard;
