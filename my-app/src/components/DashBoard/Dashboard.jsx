import { cards } from "../../assets/DashboardData";
import DashboardSurvey from "./DashboardSurvey";;
import DashboardPerformance from "./DashboardPerformance";
import DashBoardTable from "./DashBoardTable";
import DashboardHeader from "./Header/DashboardHeader";
import Dashboardcard from "./wedgits/Dashboardcard";
import DashboardBar from "./Header/DashboardBar";
import DashboardLayout from "./layout/layout";


const Dashboard = () => {
  return (
    <DashboardLayout>
      
        <DashboardBar />
        <DashboardHeader />
        <Dashboardcard cards={cards} />
        <DashboardSurvey />
        <DashboardPerformance />
        <DashBoardTable />

    </DashboardLayout>
  );
};

export default Dashboard;