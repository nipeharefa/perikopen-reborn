import { READ_PERIKOPEN } from '../constants'

export function read(n) {
  return {
    type: READ_PERIKOPEN,
    payload: n
  }
}