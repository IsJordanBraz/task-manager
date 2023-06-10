import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { tasksReducer, tasksFeatureKey } from "./tasks.reducer";

export const reducers: ActionReducerMap<AppState> = {
  [tasksFeatureKey]: tasksReducer
}