import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TasksService } from '../../services/tasks.service';
import * as taskActions from '../actions/tasks.actions';
import { of } from 'rxjs';
@Injectable()
export class TasksEffects {
 
  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.getAllTask),
    exhaustMap(() => this.tasksService.getTasks()
      .pipe(
        map(tasks => {
          return taskActions.getAllTaskSuccess({ tasks })
        }),
        catchError((error) =>
          of(taskActions.getAllTaskFailure({ error }))
        )
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) {}
}