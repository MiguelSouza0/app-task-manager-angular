import { Component, computed, input, output } from '@angular/core';
import { Task } from '../task';

const LEVELS = { low: 'Baixa', medium: 'Média', high: 'Alta' };

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.html',
})
export class TaskCard {
  readonly task = input.required<Task>();
  readonly removed = output<string>();

  protected readonly level = computed(() => LEVELS[this.task().level]);

  protected readonly dueColor = computed(() => {
    const days = (new Date(this.task().due).getTime() - new Date().getTime()) / 86_400_000;
    if (days < 0) return 'bg-gray-500';
    if (days <= 1) return 'bg-red-500';
    if (days <= 3) return 'bg-orange-400';
    if (days <= 7) return 'bg-yellow-300';
    return 'bg-green-400';
  });
}
