import React from "react";
import { useState } from "react";

export interface Task {
  id: number;
  name: string;
  status: "To Do" | "in progress" | "Done";
}

interface toDoProps {
  task: Task;
  taskAdd(text: string): void;
  taskChange(task: Task): void;
  taskDelete(id: number): void;
}

const ToDo = ({ task, taskAdd, taskChange, taskDelete }: toDoProps) => {
  const [myTask, setMyTask] = useState<Task>({
    name: task.name,
    id: task.id,
    status: task.status,
  });
  const [canEdit, setCanEdit] = useState<boolean>(false);

  return (
    <div>
      Text:{" "}
      <input
        type="text"
        value={myTask.name}
        onChange={(e) => setMyTask({ ...myTask, name: e.target.value })}
      />{" "}
      <button> Edit </button>
      <br />
    </div>
  );
};

export default ToDo;
