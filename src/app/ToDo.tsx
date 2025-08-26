import React from "react";
import { useState } from "react";

export interface Task {
  id: number;
  name: string;
  status: "To Do" | "in progress" | "Done";
}

interface toDoProps {
  task: Task;
}

const ToDo = ({ task }: toDoProps) => {
  const [myTask, setMyTask] = useState<Task>({
    name: task.name,
    id: task.id,
    status: task.status,
  });
  type taskTemplate = {
    name: string;
    id: number;
    status: string;
  };

  return (
    <div>
      Text: <input type="text" value={myTask.name} /> <br />
    </div>
  );
};

export default ToDo;
