import { error } from "console";
import { Task } from "./ToDo";

interface taskAction {
  type: string;
  id: number;
  name?: string;
  task?: Task;
}

export default function tasksReducer(
  tasks: Task[],
  action: taskAction
): Task[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          name: action.name ? action.name : "",
          status: "To Do",
        },
      ];
    }

    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.id && action.task) {
          return action.task;
        }
        return t;
      });
    }

    case "deleted": {
      return tasks.filter((t) => {
        return t.id !== action.id;
      });
    }

    default: {
      throw error(`unknown action ${action.type}`);
    }
  }
}
