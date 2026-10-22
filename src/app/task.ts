export type Level = 'low' | 'medium' | 'high';
export type Status = 'todo' | 'doing' | 'done';

export interface Task {
  id: string;
  title: string;
  due: string;
  level: Level;
  desc: string;
  status: Status;
}
