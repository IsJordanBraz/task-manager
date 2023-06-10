import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TaskManagerHeaderComponent } from './task-manager-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('TaskManagerHeaderComponent', () => {
  let component: TaskManagerHeaderComponent;
  let fixture: ComponentFixture<TaskManagerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerHeaderComponent, SearchBarComponent],
      imports: [MatToolbarModule, MatIconModule, ReactiveFormsModule],
      providers: [
        provideMockStore(),
      ]
    });
    fixture = TestBed.createComponent(TaskManagerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
