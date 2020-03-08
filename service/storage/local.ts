import { deserialize } from 'typescript-json-serializer'

function save(key: string, value: object) {
  localStorage.setItem(key, JSON.stringify(value))
}

function find<T>(key: string, type: new (...params: Array<any>) => T): T | null {
  const json = localStorage.getItem(key)
  if (!json) {
    return null
  }
  return deserialize(JSON.parse(json), type)
}

function remove(key: string) {
  localStorage.removeItem(key)
}

function clear() {
  localStorage.clear()
}

export const local = {
  find,
  save,
  remove,
  clear
}