import { Component, signal } from '@angular/core';
import { Status, Task } from './task';
import { TaskForm } from './task-form/task-form';
import { TaskColumn } from './task-column/task-column';

function addDays(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

@Component({
  imports: [TaskForm, TaskColumn],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly columns: { status: Status; title: string }[] = [
    { status: 'todo', title: 'Para fazer' },
    { status: 'doing', title: 'Em andamento' },
    { status: 'done', title: 'Concluídas' },
  ];

  protected readonly tasks = signal<Task[]>([
    { id: '1', title: 'Ler capítulo 3 de Algoritmos', due: addDays(2), level: 'high', desc: 'Priorizar exercícios 3.1-3.5', status: 'todo' },
    { id: '2', title: 'Resolver lista de TS', due: addDays(5), level: 'medium', desc: 'Atenção a generics', status: 'doing' },
    { id: '3', title: 'Revisão rápida: HTML/CSS', due: addDays(10), level: 'low', desc: '30 minutos', status: 'done' },
  ]);

  protected tasksBy(status: Status) {
    return this.tasks().filter((t) => t.status === status);
  }

  protected add(task: Omit<Task, 'id' | 'status'>) {
    this.tasks.update((tasks) => [...tasks, { id: String(Date.now()), ...task, status: 'todo' }]);
  }

  protected remove(id: string) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }
}
