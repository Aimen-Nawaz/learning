const DashboardHeader = () => {
    return (
        

        <div className="header">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>


            <div className="actions">
        <button className="export">Export</button>
        <button className="add">+ Add New</button>
      </div>
      
        </div>

      
    );
};

export default DashboardHeader;