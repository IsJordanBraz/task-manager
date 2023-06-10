import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState, tasksFeatureKey } from "../reducers/tasks.reducer";

export const getAllTasksFeatureState = createFeatureSelector<TasksState>(tasksFeatureKey)

export const getTasks = createSelector(
  getAllTasksFeatureState,
  (state: TasksState) => state.tasks
);
