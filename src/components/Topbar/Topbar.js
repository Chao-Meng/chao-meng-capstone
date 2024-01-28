import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
  return (
    <div className="topbar" >
    
      {/* <div
        className="topbar__search"
      >
        <input
          className="topbar__search-input"
          placeholder="Search"
        />
        <button className="topbar__search-button" type="button">
        </button>
      </div> */}

      <div className="topbar__icons">
        <button className="topbar__icon">
            <PersonOutlinedIcon/>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
