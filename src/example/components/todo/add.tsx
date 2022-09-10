import { defineComponent, ref } from 'vue';
import { Store } from '../../store';

const component = defineComponent({
  setup() {
    const task = ref('');

    return () => (
      <div class="todo--add">
        <div>
          <input v-model={task.value} placeholder="Task" />
          <button
            onClick={() => {
              Store.todo.set({
                id: Store.todo.items().length + '',
                task: task.value,
                completed: false,
              });
              task.value = '';
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  },
});
export default component;
