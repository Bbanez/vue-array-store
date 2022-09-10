import { createArrayStore } from '../main';
import type { Todo } from './types';

export const Store = {
  todo: createArrayStore<Todo>([
    {
      id: '0',
      completed: false,
      task: 'This is a task 1.',
    },
    {
      id: '1',
      completed: false,
      task: 'And this is a task 2.',
    },
  ]),
};
