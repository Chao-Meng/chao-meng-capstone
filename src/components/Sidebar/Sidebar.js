import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import "./Sidebar.scss";
const Item = ({ title, newPage, icon, selected, setSelected }) => {
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={
        {
          // color: colors.grey[100],
        }
      }
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={newPage} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <ProSidebar className="Prosidebar">
      <Menu iconShape="square">
        <MenuItem
          icon={<MenuOutlinedIcon />}
          style={
            {
              //margin: "10px 0 20px 0",
              //color: colors.grey[100],
            }
          }
        ></MenuItem>

        <Box className="Box__container">
          <Box className="Box__img">
            <img
              alt="profile"
              width="150px"
              height="150px"
              src={profileImage}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h2"
              //color={colors.grey[100]}
              fontWeight="bold"
              //sx={{ m: "10px 0 0 0" }}
              icon={<PersonOutlinedIcon />}
            >
              Jone
            </Typography>
            <Typography>Energy Manager</Typography>
          </Box>
        </Box>

        <Box paddingLeft={"10%"}>
          <Link to="/" className="Box__link">
            <Item
              title="Dashboard"
              newPage="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Link>
          <Link to="/team" className="Box__link">
            <Item
              title="Team Member"
              newPage="/teamMember"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Link>

          <Item
            title="Profile Form"
            newPage="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Link to="/faq" className="Box__link">
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Link>
          <Link to="/ElectricityPieChart" className="Box__link">
            <Item
              title="Pie Chart"
              newPage="/energyData"
              icon={
                <Link to="/ElectricityPieChart" className="Box__link">
                  <PieChartOutlineOutlinedIcon />
                </Link>
              }
              // icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />{" "}
          </Link>
          <Link to="/ElectricityLineChartPage" className="Box__link">
            {" "}
            <Item
              title="Energy Line Chart"
              newPage="/energyLineChart"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Link>
          <Link to="/WaterLineChartPage" className="Box__link">
            <Item
              title="Water Line Chart"
              newPage="/waterLineChart"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Link>
        </Box>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
