import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerHeaderComponent } from './task-manager-header.component';

describe('TaskManagerHeaderComponent', () => {
  let component: TaskManagerHeaderComponent;
  let fixture: ComponentFixture<TaskManagerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerHeaderComponent]
    });
    fixture = TestBed.createComponent(TaskManagerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
