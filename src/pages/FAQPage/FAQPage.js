import Sidebar from "../../components/Sidebar/Sidebar";
import FAQ from "../../components/FAQ/FAQ";
import "./FAQPage.scss";

const FAQPage = () => {
  return (
    <>
      <div className="piechart__container">
        <Sidebar className="dashboard__sidebar" />
        <div>
          <p className="pieChart__title">Frequently asked question</p>
          {/* <div className="piechart__container--small">
          <div className="piechart__chart"> */}
          <FAQ className="FAQ__content" />
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>{" "}
    </>
  );
};
export default FAQPage;
