import type { StoreItem } from '@banez/vue-array-store/types';

export interface Todo extends StoreItem {
  task: string;
  completed: boolean;
}
