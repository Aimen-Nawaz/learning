import { ListTask } from "../../assets/ListTask";
import "../../styles/ListTask.css";

const List = () => {
    return (
        <div className="Team">

            <div className="task">
                <h2>Daily Priorities</h2>
                <ul>
                    {ListTask?.dailyPriorities?.map((item, index) => (
                        <li key={index}>
                            {item.task} - {item.time}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="task">
                <h2>Groceries</h2>
                <ul>
                    {ListTask?.groceryChecklist?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default List;