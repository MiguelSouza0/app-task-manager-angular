import { Component, input, output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { Status, Task } from '../task';
import { TaskCard } from '../task-card/task-card';

@Component({
  imports: [CdkDropList, CdkDrag, TaskCard],
  selector: 'app-task-column',
  templateUrl: './task-column.html',
})
export class TaskColumn {
  readonly status = input.required<Status>();
  readonly title = input.required<string>();
  readonly tasks = input.required<Task[]>();
  readonly moved = output<{ id: string; status: Status }>();
  readonly removed = output<string>();

  drop(event: CdkDragDrop<Status, Status, string>) {
    if (event.previousContainer !== event.container) {
      this.moved.emit({ id: event.item.data, status: event.container.data });
    }
  }
}
