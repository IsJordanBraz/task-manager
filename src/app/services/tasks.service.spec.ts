import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TasksService } from './tasks.service';
import { Task } from '../shared/interfaces/task';
import { asyncData } from './testing/async-observable-helpers';
import { throwError } from 'rxjs';

describe('TesteService', () => {
  let taskService: TasksService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const testingTasks: Task[] = [
    {
      id: 1,
      title: "testing1",
      description: "Fazer testes unitarios",
      status: true
    },
    {
      id: 2,
      title: "testing2",
      description: "Utilizar o angular cli",
      status: false
    },
    {
      id: 3,
      title: "testing3",
      description: "não utilizar http client",
      status: true
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [TasksService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    taskService = new TasksService(httpClientSpy);
  });

  it('should be created', () => {
    expect(taskService).toBeTruthy();
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncData(testingTasks));
    taskService.getTasks().subscribe({
      next: tasks => {
        expect(tasks).toEqual(testingTasks)
        done()
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {  
    httpClientSpy.get.and.returnValue(throwError(() => {
      return new HttpErrorResponse({
        error: '404 Not Found',
        status: 404, 
        statusText: 'Not Found'
      });
    }))
  
    taskService.getTasks().subscribe({
      next: () => done.fail('expected an error, not heroes'),
      error: (error: HttpErrorResponse)  => {
        expect(error.error).toContain('404 Not Found');
        done();
      }
    });
  });

  it('should return a created task', (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(asyncData(testingTasks[0]));
    taskService.createTask(testingTasks[0]).subscribe({
      next: createdTask => {
        expect(createdTask).not.toEqual(testingTasks[1])
        expect(createdTask).toEqual(testingTasks[0])
        done()
      },
      error: done.fail
    });
    expect(httpClientSpy.post.calls.count()).withContext('one call').toBe(1);
  });

  it('should update a task', (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(asyncData(testingTasks[0]));
    taskService.updateTask(testingTasks[0], 1).subscribe({
      next: () => done(),
      error: done.fail
    });
    expect(httpClientSpy.put.calls.count()).withContext('one call').toBe(1);
  });

  it('should delete a task', (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(asyncData(testingTasks[0]));
    taskService.deleteTask(1).subscribe({
      next: () => done(),
      error: done.fail
    });
    expect(httpClientSpy.delete.calls.count()).withContext('one call').toBe(1);
  });
})
