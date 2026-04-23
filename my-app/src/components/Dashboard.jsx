import "../styles/Dashboard.css";
import { cards, teachers } from "../assets/DashboardData";

import profileImg from "../images/image22.jpg";
import surveyImg from "../images/gphj.png";
import performanceImg from "../images/grph.png";

function Dashboard() {
  return (
    <div className="dashboard">

    
      <div className="sidebar">
        <div className="logo">SMART</div>

        <div className="profile">
          <img src={profileImg} alt="Admin" />
          <b>Sneha Patel</b>
          <small>Administrator</small>
        </div>

        <div className="menu">
          <div>Dashboard</div>
          <div>Event Management</div>
          <div>Professor</div>
          <div>Student</div>
          <div>Courses</div>
          <div>Surveys</div>
          <div>Library</div>
          <div>Departments</div>
          <div>Staff</div>
          <div>Holiday</div>
          <div>Charts</div>
          <div>Maps</div>
          <div>Extra pages</div>

          
          <div>Multiple level</div>

          <div>Widget</div>
          <div>Fees</div>
        </div>
      </div>

  
      <div className="header">
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="actions">
          <button className="export">Export</button>
          <button className="add">+ Add New</button>
        </div>
      </div>

  
      <div>
        <div className="dashboard-bar">
          <div className="dashboard-title">Dashboard</div>
          <div className="path">🏠 Home &gt; Dashboard</div>
        </div>

        <div className="main">

          
          {cards.map((card, index) => (
            <div key={index} className={card.className}>
              <h4 style={{ textAlign: "center" }}>
                <i className={`fa-solid ${card.icon}`}></i> {card.title}
              </h4>
              <p style={{ textAlign: "center" }}>{card.value}</p>
            </div>
          ))}

        
          <div className="survey">
            <h3>University Surveys</h3>
            <img src={surveyImg} alt="survey" />
          </div>

          
          <div className="performance">
            <h3>Student Performance</h3>
            <img src={performanceImg} alt="performance" />
          </div>

          
          <div className="teacher">
            <h3>Teachers List</h3>

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {teachers.map((t) => (
                  <tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.name}</td>
                    <td>{t.department}</td>
                    <td>{t.email}</td>
                    <td>{t.class}</td>
                    <td>{t.subject}</td>
                    <td className="rating">{t.rating}</td>
                    <td>
                      <span className="edit">✏</span>
                      <span className="delete">🗑</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </div>
      </div>

    
      <div className="footer">
        © 2026 Dashboard | All Rights Reserved
      </div>

    </div>
  );
}

export default Dashboard;