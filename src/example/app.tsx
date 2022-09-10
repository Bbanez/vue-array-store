import { defineComponent } from 'vue';
import { TodoAdd, TodoList } from './components';

const component = defineComponent({
  setup() {
    return () => (
      <div>
        <TodoList />
        <TodoAdd />
      </div>
    );
  },
});
export default component;
