import { useState } from "react";
import "./DashBoard.scss";
import Header from "../../components/Header/Header";
import PieChart from "../../components/PieChart/PieChart";
import ElectricityLineChart from "../../components/ElectricityLineChart/ElectricityLineChart";
import WaterLineChart from "../../components/WaterLineChart/WaterLineChart";
import Sidebar from "../../components/Sidebar/Sidebar";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import "react-pro-sidebar/dist/css/styles.css";
import building from "../../assets/images/building.png";
import Table from "../../components/Table/Table";
import WeatherTable from "../../components/WeatherTable/WeatherTable";
import ScrollTable from "../../components/ScrollTable/ScrollTable";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Sidebar className="dashboard__sidebar" />
      <section className="dashboard__container--big">
        <Header className="dashboard__header" title="Dashboard" />
        <div className="dashboard__container">
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
              <Table />
            </div>
          </div>
          <div className="dashboard__other">
            <div className="dashboard__weathertable">
              <p className="dashboard__content">
                whether for the next three days
              </p>
              <WeatherTable />
            </div>
            <div className="dashboard__scrolltable">
              <p>Electricity consumption stastistics per office unit</p>
              <ScrollTable />
            </div>
            <div className="dashboard__moreicons">
              <p className="dashboard__text">Equipment statistics</p>
              <div>
                <FlashOnIcon className="dashboard__icon" />
                <p className="dashboard__text">
                  electricity meters:
                  <br />
                  1000
                </p>
              </div>
              <div>
                <WaterDropIcon className="dashboard__icon" />
                <p className="dashboard__text">water meters: 502</p>
              </div>
              <div>
                <ThermostatIcon className="dashboard__icon" />
                <p className="dashboard__text">temperature sensors: 2000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DashBoard;
