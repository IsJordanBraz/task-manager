import { Injectable } from '@angular/core';
import { Task } from '../shared/interfaces/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('https://task-manager-backend-vert.vercel.app/tasks');
  }

  getTasksFromTerm(term: string): Observable<Task[]> {
    return this.http.get<Task[]>(`https://task-manager-backend-vert.vercel.app/tasks?term=${term}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`https://task-manager-backend-vert.vercel.app/tasks`, task);
  }

  updateTask(tasktoUpdate: Task, id: number): Observable<Task> {
    return this.http.put<Task>(`https://task-manager-backend-vert.vercel.app/tasks/${id}`, tasktoUpdate);
  }

  deleteTask(id: number): Observable<null> {
    return this.http.delete<null>(`https://task-manager-backend-vert.vercel.app/tasks/${id}`);
  }

}
