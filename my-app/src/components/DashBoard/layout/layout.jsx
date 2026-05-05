import Sidebar from "../sidebar/sidebar";



const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard">
            <Sidebar />

            <div className="content">

                {children}

            </div>

        </div>
    );
};

export default DashboardLayout;