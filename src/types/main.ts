export interface StoreQuery<ItemType> {
  (item: ItemType): boolean | number | string | unknown;
}

export interface StoreMethods<ItemType, Methods = unknown> {
  (store: ArrayStore<ItemType>): Methods;
}

export interface ArrayStore<
  ItemType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Methods = unknown,
> {
  items(): ItemType[];
  find(query: StoreQuery<ItemType>): ItemType | null;
  findById(id: string): ItemType | null;
  findMany(query: StoreQuery<ItemType>): ItemType[];
  findManyById(ids: string[]): ItemType[];
  set(items: ItemType | ItemType[]): void;
  remove(ids: string | string[]): void;
  methods: Methods;
}
