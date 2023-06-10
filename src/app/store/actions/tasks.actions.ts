import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/shared/interfaces/task';

export const getAllTask = createAction('[Task] get all tasks');
export const getAllTaskSuccess = createAction(
  '[Task] get all tasks success',
  props<{ tasks: Task[] }>()
);
export const getAllTaskFailure = createAction(
  '[Task] get all tasks failure',
  props<{ error: string }>()
);

export const getTaskByTerm = createAction(
  '[Task] get tasks by term',
  props<{ term: string }>()
);
export const getTaskByTermSuccess = createAction(
  '[Task] get tasks by term success',
  props<{ tasks: Task[] }>()
);
export const getTaskByTermFailure = createAction(
  '[Task] get tasks by term failure',
  props<{ error: string }>()
);

export const updateTask = createAction(
  '[Task] update task',
  props<{ tasks: Task }>()
);
export const updateTaskSuccess = createAction(
  '[Task] update task',
  props<{ tasks: Task[] }>()
);
export const updateTaskFailure = createAction(
  '[Task] update task',
  props<{ error: string }>()
);

export const deleteTask = createAction(
  '[Task] delete task',
  props<{ id: number }>()
);
export const deleteTaskSuccess = createAction(
  '[Task] delete task',
  props<{ tasks: Task[] }>()
);
export const deleteTaskFailure = createAction(
  '[Task] delete task',
  props<{ error: string }>()
);