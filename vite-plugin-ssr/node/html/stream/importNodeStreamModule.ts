import { Readable, Writable } from 'stream'
import { streamNodeModuleSet } from './streamNodeModule'

streamNodeModuleSet({ Readable, Writable })
