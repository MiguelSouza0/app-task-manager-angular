import { Component, ElementRef, output, viewChild } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.html',
})
export class TaskForm {
  readonly created = output<Omit<Task, 'id' | 'status'>>();

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  open() {
    this.dialog().nativeElement.showModal();
  }

  close() {
    this.dialog().nativeElement.close();
  }

  submit(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form)) as unknown as Omit<Task, 'id' | 'status'>;
    this.created.emit(data);
  }
}
