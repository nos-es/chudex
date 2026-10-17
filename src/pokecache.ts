export class Cache {
  #cache = new Map<string, CacheEntry<any>>();

  add<T>(key: string, value: T): void {
    this.#cache.set(key, { createdAt: Date.now(), value: value });
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    return this.#cache.get(key);
  }
}
export type CacheEntry<T> = {
  createdAt: number;
  value: T;
};
