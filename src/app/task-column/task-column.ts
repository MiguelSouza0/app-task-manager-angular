import { Component, input, output } from '@angular/core';
import { Task } from '../task';
import { TaskCard } from '../task-card/task-card';

@Component({
  imports: [TaskCard],
  selector: 'app-task-column',
  templateUrl: './task-column.html',
})
export class TaskColumn {
  readonly title = input.required<string>();
  readonly tasks = input.required<Task[]>();
  readonly removed = output<string>();
}
