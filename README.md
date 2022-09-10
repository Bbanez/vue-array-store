# Simple Vue 3 array store

[Vuex](https://vuex.vuejs.org/) is very complicated to setup with TypeScript and required a lot of coding for simple stuff. Because of this I've created a simple array store which uses `ref` API from Vue 3.

## Getting started

There is only 1 entry point for this package and it is called `createArrayStore` as shown in example bellow:

```ts
import type { StoreItem } from '@banez/vue-array-store';

interface Todo extends StoreItem {
  task: string;
}

const store = createArrayStore<Todo>();

store.set({
  id: '1',
  task: 'Hello world!',
});

console.log(store.items());
```

## Example

You will be able to find an example on how to use this package with Vue App by cloning the [GitHub](https://github.com/Bbanez/vue-array-store) repository or by exploring the code on the [GitHub repository](https://github.com/Bbanez/vue-array-store/tree/master/src/example) itself.
