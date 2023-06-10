import { Component, OnDestroy } from '@angular/core';
import { Task } from '../shared/interfaces/task';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { getAllTask } from '../store/actions/tasks.actions';
import { getTasks } from '../store/selectors/tasks.selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnDestroy {
  public tasks: Task[] = [];
  public subscription: Subscription;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getAllTask());
    this.subscription = this.store.select(getTasks).subscribe(tasks => this.tasks = tasks);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
