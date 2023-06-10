import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TaskManagerHeaderComponent } from './shared/task-manager-header/task-manager-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchBarComponent } from './shared/task-manager-header/search-bar/search-bar.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, MatToolbarModule, MatIconModule, ReactiveFormsModule],
    declarations: [AppComponent, TaskManagerHeaderComponent, SearchBarComponent],
    providers: [
      provideMockStore(),
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'task-manager'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    console.log(app.title)
    expect(app.title).toEqual('task-manager');
  });
});
