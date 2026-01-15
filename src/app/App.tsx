import React, { useState } from "react";
import { useReducer } from "react";
import tasksReducer, * as reducer from "./tasksReducer";
import { Task } from "./ToDo";
import { actions } from "./tasksReducer";
import "./globals.css";

const App = () => {
  let nextid = 2;

  let initialTasks: Task[] = [
    { id: 0, name: "replace FW", status: "To Do" },
    { id: 1, name: "open access to bakara room", status: "To Do" },
  ];

  function handleTaskAdd(text: string) {
    dispatch({
      type: actions.taskAdd,
      payload: {
        name: text,
        id: nextid++,
      },
    });
  }

  function handleTaskChange(task: Task) {
    dispatch({
      type: actions.taskChange,
      payload: {
        id: task.id,
        task: task,
      },
    });
  }

  function handleTaskDelete(id: number) {
    dispatch({
      type: actions.taskDelete,
      payload: {
        id: id,
      },
    });
  }

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [text, setText] = useState<string>("");

  return (
    <div className="center">
      <h1> Task list</h1> <br />
      {tasks.map((task) => (
        <div key={task.id}>
          {task.name}:{" "}
          <input
            type="text"
            style={{ border: "1px solid" }}
            onChange={(e) => handleAdd(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
