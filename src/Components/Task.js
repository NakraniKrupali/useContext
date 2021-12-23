import { FaTimes } from "react-icons/fa";
import { userContext } from "react";
import { UserContext } from "../App";
const Task = ({ task, onToggle, onDelete }) => {
  // const {tasks,onDelete,onToggle}= userContext(UserContext);

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
export default Task;
