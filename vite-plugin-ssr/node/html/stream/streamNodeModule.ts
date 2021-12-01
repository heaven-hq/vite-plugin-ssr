import { assert, assertUsage } from '../../../shared/utils'
import type { Readable as ReadableType, Writable as WritableType } from 'stream'

export { streamNodeModuleSet }
export { streamNodeModuleGet }

let streamNodeModuleHolder: null | {
  Readable: typeof ReadableType
  Writable: typeof WritableType
} = null

function streamNodeModuleSet({ Readable, Writable }: { Readable: typeof ReadableType; Writable: typeof WritableType }) {
  streamNodeModuleHolder = {
    Readable,
    Writable,
  }
}

function streamNodeModuleGet() {
  assert(streamNodeModuleHolder || streamNodeModuleHolder === null)
  assertUsage(streamNodeModuleHolder !== null, "You are trying to use Node Streams. Make sure to `import 'vite-plugin-ssr/importNodeStreamModule'`. (In case you are curious why: https://vite-plugin-ssr.com/html-streaming .)")
  return streamNodeModuleHolder
}
