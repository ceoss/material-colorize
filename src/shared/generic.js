/**
 * @callback objectMap
 * @param value - The value of the key that is currently being modified. Added as an attempt to duplicate Array.map `value`
 * @param {string} key - The key that is currently being modified. Added as an attempt to duplicate Array.map `index`
 * @param object - The original untouched object that the map function is being called on. Added as an attempt to duplicate Array.map `array`
 */

/**
 * Map through all keys in an object and call a CB. Assign that CB's return value to the key in question
 * @param object - The object to make this call on. This would otherwise be bound to `Object.prototype` but I don't like breaking the web
 * @param {objectMap} cb - The callback in order to run the `Object.map` function
 * @returns - The object with it's keys altered by the cb param
 */
export function ObjectMap<T: object>(object: T, cb: (value: $Values<T>, key: $Keys<T>, object?: T) => any): {[$Keys<typeof T>]: any} {
  return Object.keys(object).reduce((prev, key) => ({
    ...prev,
    [key]: cb(object[key], key, object)
  }), {});
}

export function titleFromCamelCase(str: string): string {
  return str.replace(/(?!^)[A-Z]/g, ' $&');
}
