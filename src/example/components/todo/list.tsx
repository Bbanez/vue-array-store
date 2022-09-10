import { computed, defineComponent } from 'vue';
import { Store } from '../../store';
import TodoItem from './item';

const component = defineComponent({
  setup() {
    const items = computed(() => Store.todo.items());

    return () => (
      <div class="todo">
        <div class="todo--head">
          <h1>Todo list</h1>
          <div class="todo--head-stats">
            <span>Tasks: {items.value.length}</span>
            <span>
              Completed: {items.value.filter((e) => e.completed).length}
            </span>
          </div>
        </div>
        <div class="todo--body">
          {items.value ? (
            <ol class="todo--items">
              {items.value.map((item) => {
                return <TodoItem item={item} />;
              })}
            </ol>
          ) : (
            <div class="todo--noItems">There are no todos</div>
          )}
        </div>
      </div>
    );
  },
});

export default component;
