import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent]
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getMyTask should return the correct result', () => {
    expect(component.getMyTask(1, 2)).toBe(3);
  });

  it('getMyTask should not return the correct result', () => {
    expect(component.getMyTask(1, 2)).not.toBe(4)
  });
});
