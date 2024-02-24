import Sidebar from "../../components/Sidebar/Sidebar";
import TeamTable from "../../components/TeamTable/TeamTable";
import "./Team.scss";

const Team = () => {
  return (
    <div className="piechart__container">
      <Sidebar className="dashboard__sidebar" />
      <div className="piechart__container--small">
        <div className="linechart__chart">
          <TeamTable className="" />
        </div>
      </div>
    </div>
  );
};
export default Team;
