import { inject } from "vue";

export function injectStrict(key, fallback = null) {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}
