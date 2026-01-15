import { Task } from "./ToDo";

export const actions = {
  taskAdd: "added",
  taskChange: "changed",
  taskDelete: "deleted",
};

export interface taskAction {
  type: string;
  payload: {
    id: number;
    name?: string;
    task?: Task;
  };
}

export default function tasksReducer(
  tasks: Task[],
  action: taskAction
): Task[] {
  switch (action.type) {
    case actions.taskAdd: {
      return [
        ...tasks,
        {
          id: action.payload.id,
          name: action.payload.name ? action.payload.name : "",
          status: "To Do",
        },
      ];
    }

    case actions.taskChange: {
      return tasks.map((t) => {
        if (t.id === action.payload.id && action.payload.task) {
          return action.payload.task;
        }
        return t;
      });
    }

    case actions.taskDelete: {
      return tasks.filter((t) => {
        return t.id !== action.payload.id;
      });
    }

    default: {
      return tasks;
    }
  }
}
