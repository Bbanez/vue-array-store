import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Todo } from '../../types';

const component = defineComponent({
  props: {
    item: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <li class="todo--item">
        <div
          class={`todo--item-task ${
            props.item.completed ? 'todo--item-task_completed' : ''
          }`}
        >
          {props.item.task}
        </div>
        <button
          class="todo--item-action"
          onClick={() => {
            props.item.completed = !props.item.completed;
          }}
        >
          {!props.item.completed ? 'Complete' : 'Activate'}
        </button>
      </li>
    );
  },
});
export default component;
