import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
//import Login from "./pages/Login/Login";
import Team from "./pages/Team/Team";
import ElectricityPieChart from "./pages/ElectricityPieChart/ElectricityPieChart";
import ElectricityLineChartPage from "./pages/ElectricityLineChartPage/ElectricityLineChartPage";
import Login from "./components/Login/Login";
import "./styles/global.scss";
import "./styles/App.css";

// import  ElectricityPieChart from "./pages/ElectricityPieChart/ElectricityPieChart";
// import  ElectricityLineChart from "./pages/ElectricityLineChart/ElectricityLineChart";
import WaterLineChartPage from "./pages/WaterLineChartPage/WaterLineChartPage";
import FAQPage from "./pages/FAQPage/FAQPage";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <main>
          {/* <Topbar /> */}
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/electricityPieChart"
              element={<ElectricityPieChart />}
            />
            <Route
              path="/electricityLineChartPage"
              element={<ElectricityLineChartPage />}
            />
            <Route
              path="/waterLineChartPage"
              element={<WaterLineChartPage />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
