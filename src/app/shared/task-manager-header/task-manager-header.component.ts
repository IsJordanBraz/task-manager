import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-manager-header',
  templateUrl: './task-manager-header.component.html',
  styleUrls: ['./task-manager-header.component.scss']
})
export class TaskManagerHeaderComponent {
  searchTerm = new FormControl('');
}
