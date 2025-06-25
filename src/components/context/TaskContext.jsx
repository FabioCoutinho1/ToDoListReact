import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [getIdTask, setGetIdTask] = useState(null);

  return (
    <TaskContext.Provider value={{ getIdTask, setGetIdTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
