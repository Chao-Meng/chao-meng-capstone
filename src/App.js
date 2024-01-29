import {BrowserRouter, Routes, Route} from "react-router-dom";
import Topbar from "./components/Topbar/Topbar"
import DashBoard from "./pages/DashBoard/DashBoard";
import  Login from "./pages/Login/Login";
import  Team from "./pages/Team/Team";
import "./styles/global.scss";
import "./styles/App.css";

// import  ElectricityPieChart from "./pages/ElectricityPieChart/ElectricityPieChart";
// import  ElectricityLineChart from "./pages/ElectricityLineChart/ElectricityLineChart";
// import  WaterLineChart from "./pages/WaterLineChart/WaterLineChart";
function App() {
  return ( <div className="app"> 
    <BrowserRouter>
    <main>
      <Topbar/>
    <Routes>
      <Route path="/" element={<DashBoard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/team" element={<Team />} />
      {/* <Route path="/electricityPieChart" element={<ElectricityPieChart />} />
      <Route path="/electricityLineChart" element={<ElectricityLineChart />} />
      <Route path="/waterLineChart" element={<WaterLineChart />} /> */}
      </Routes>
      </main>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
