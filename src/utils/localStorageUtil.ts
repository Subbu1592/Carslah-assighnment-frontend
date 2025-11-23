export const storage = {
  // Save any type of value
  set<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;

    try {
      const serialized = JSON.stringify(value);
      window.localStorage.setItem(key, serialized);
    } catch (err) {
      console.error("LocalStorage set error:", err);
    }
  },

  // Retrieve and auto-parse the value with types
  get<T>(key: string, fallback?: T): T | null {
    if (typeof window === "undefined") return fallback ?? null;

    try {
      const value = window.localStorage.getItem(key);
      if (!value) return fallback ?? null;
      return JSON.parse(value) as T;
    } catch (err) {
      console.error("LocalStorage get error:", err);
      return fallback ?? null;
    }
  },

  // Delete a specific key
  remove(key: string): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.error("LocalStorage remove error:", err);
    }
  },

  // Clear everything
  clear(): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.clear();
    } catch (err) {
      console.error("LocalStorage clear error:", err);
    }
  },

  // Check if a key exists
  has(key: string): boolean {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(key) !== null;
  },
};

// how to use
// ->to save >>storage.set("user", { name: "Subhash", age: 23 });
// -> to retrive >>const user = storage.get<{ name: string; age: number }>("user");
// -> to retrieve with fallback >>const theme = storage.get<string>("theme", "light");
// -> to remove >>storage.remove("user");
// -> to clear all >>storage.clear();
