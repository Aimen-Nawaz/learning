import performanceImg from "../../images/grph.png";

const DashboardPerformance = () => {
  return (
    <div className="performance">
      <h3>Student Performance</h3>
      <img src={performanceImg} alt="performance" />
    </div>
  );
};

export default DashboardPerformance;