export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, value: T): void {
    this.#cache.set(key, { createdAt: Date.now(), value: value });
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    return this.#cache.get(key);
  }

  #reap() {
    console.log("reap execute");
    const removeKeys: string[] = [];
    for (const [key, value] of this.#cache) {
      if (value.createdAt < Date.now() - this.#interval) removeKeys.push(key);
    }
    for (const key of removeKeys) {
      this.#cache.delete(key);
    }
  }
  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
export type CacheEntry<T> = {
  createdAt: number;
  value: T;
};
