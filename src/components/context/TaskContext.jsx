import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [getIdTask, setGetIdTask] = useState(null);

  const fetchTask = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    return data
  };

  return (
    <TaskContext.Provider value={{ getIdTask, setGetIdTask, fetchTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
