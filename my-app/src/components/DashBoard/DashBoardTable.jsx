import { teachers } from "../../assets/DashboardData";

const DashBoardTable = () => {
  return (
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
  );
};

export default DashBoardTable;