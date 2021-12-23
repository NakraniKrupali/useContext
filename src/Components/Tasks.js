import Task from "./Task";
import { useContext } from "react";
import { UserContext } from "../App";

const Tasks = ({ onDelete, onToggle }) => {
  const tasks = useContext(UserContext);
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
export default Tasks;
