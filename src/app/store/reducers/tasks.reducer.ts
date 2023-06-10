import { createReducer, on } from '@ngrx/store';
import { deleteTask, getAllTaskSuccess, getTaskByTerm, updateTask} from '../actions/tasks.actions';
import { Task } from 'src/app/shared/interfaces/task';

export const tasksFeatureKey = 'tasks';

export const initialState: TasksState = {
  tasks: [],
  error: null
}

export interface TasksState {
  tasks: Task[];
  error: null | string;
}

export const tasksReducer = createReducer<TasksState>(
  initialState,
  on(getAllTaskSuccess, (state, action): TasksState => {
    return {
      ...state,
      tasks: action.tasks
    }
  })
);