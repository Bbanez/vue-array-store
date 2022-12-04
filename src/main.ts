import { ref } from 'vue';
import type { ArrayStore, StoreItem, StoreMethods } from './types';

export function createArrayStore<
  ItemType extends StoreItem,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Methods = unknown,
>(initItems?: ItemType[], methods?: StoreMethods<ItemType, Methods>) {
  const store = ref<ItemType[]>(initItems || []);

  const self: ArrayStore<ItemType, Methods> = {
    items() {
      return store.value as ItemType[];
    },
    find(query) {
      for (let i = 0; i < store.value.length; i++) {
        const item = store.value[i];
        if (query(item as ItemType)) {
          return item as ItemType;
        }
      }
      return null;
    },
    findById(id) {
      const output = store.value.find((e) => e.id === id);
      return (output as ItemType) || null;
    },
    findMany(query) {
      const output: ItemType[] = [];
      for (let i = 0; i < store.value.length; i++) {
        const item = store.value[i];
        if (query(item as ItemType)) {
          output.push(store.value[i] as ItemType);
        }
      }
      return output;
    },
    findManyById(ids) {
      return store.value.filter((e) => ids.includes(e.id)) as ItemType[];
    },
    set(inputItems) {
      const items = inputItems instanceof Array ? inputItems : [inputItems];
      for (let i = 0; i < items.length; i++) {
        const inputItem = items[i];
        let found = false;
        for (let j = 0; j < store.value.length; j++) {
          const storeItem = store.value[j];
          if (storeItem.id === inputItem.id) {
            found = true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            store.value.splice(j, 1, inputItem as any);
            break;
          }
        }
        if (!found) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          store.value.push(inputItem as any);
        }
      }
    },
    remove(inputIds) {
      const ids = inputIds instanceof Array ? inputIds : [inputIds];
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        for (let j = 0; j < store.value.length; j++) {
          const item = store.value[j];
          if (item.id === id) {
            store.value.splice(j, 1);
          }
        }
      }
    },
    methods: {} as never,
  };
  if (methods) {
    self.methods = methods(self);
  }

  return self;
}
