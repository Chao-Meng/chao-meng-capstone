import React from 'react';
import './Header.scss'; 

const Header = ({ title, subtitle }) => {
  return (
    <div className="header-box" >
      <h2 className="header-title">
        {title}
      </h2>
      <h5 className="header-subtitle">
        {subtitle}
      </h5>
    </div>
  );
};
export default Header;
