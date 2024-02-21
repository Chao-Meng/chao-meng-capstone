import React from "react";
import "./ScrollTable.scss";

const ScrollTable = () => {
  //   const rows = new Array(10).fill(null).map((_, index) => ({
  //     unit: 101 + index,
  //     annual: "XX X",

  //     buildingArea: "1000",
  //   }));
  const rows = [
    { unit: 101, annual: "1000", buildingArea: "1000" },
    { unit: 102, annual: "1200", buildingArea: "1100" },
    { unit: 103, annual: "1456", buildingArea: "1210" },
    { unit: 104, annual: "1300", buildingArea: "1150" },
    { unit: 105, annual: "1250", buildingArea: "1170" },
    { unit: 106, annual: "1350", buildingArea: "1200" },
    { unit: 107, annual: "1400", buildingArea: "1250" },
    { unit: 108, annual: "1500", buildingArea: "1300" },
    { unit: 109, annual: "1550", buildingArea: "1350" },
    { unit: 110, annual: "1600", buildingArea: "1400" },
    { unit: 201, annual: "1000", buildingArea: "1000" },
    { unit: 202, annual: "1200", buildingArea: "1100" },
    { unit: 203, annual: "1456", buildingArea: "1210" },
    { unit: 204, annual: "1300", buildingArea: "1150" },
    { unit: 205, annual: "1250", buildingArea: "1170" },
    { unit: 206, annual: "1350", buildingArea: "1200" },
    { unit: 207, annual: "1400", buildingArea: "1250" },
    { unit: 208, annual: "1500", buildingArea: "1300" },
    { unit: 209, annual: "1550", buildingArea: "1350" },
    { unit: 210, annual: "1600", buildingArea: "1400" },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Unit</th>
            <th>Annual(kw.h)</th>
            {/* <th>Monthly</th> */}
            <th>Area (m²)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.unit}</td>
              <td>{row.annual}</td>
              {/* <td>{row.monthly}</td> */}
              <td>{row.buildingArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollTable;
