import { deserialize } from 'typescript-json-serializer'

function save(key: string, value: object) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

function find<T>(key: string, type: new (...params: Array<any>) => T): T | null {
  const json = sessionStorage.getItem(key)
  if (!json) {
    return null
  }
  return deserialize(JSON.parse(json), type)
}

function remove(key: string) {
  sessionStorage.removeItem(key)
}

function clear() {
  sessionStorage.clear()
}

export const session = {
  save,
  find,
  remove,
  clear
}
