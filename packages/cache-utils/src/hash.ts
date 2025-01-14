import { createHash } from 'crypto'
import { createReadStream } from 'fs'

import getStream from 'get-stream'
import { locatePath } from 'locate-path'

// We need a hashing algoritm that's as fast as possible.
// Userland CRC32 implementations are actually slower than Node.js SHA1.
const HASH_ALGO = 'sha1'

// Caching a big directory like `node_modules` is slow. However those can
// sometime be represented by a digest file such as `package-lock.json`. If this
// has not changed, we don't need to save cache again.
export const getHash = async function (digests, move) {
  // Moving files is faster than computing hashes
  if (move || digests.length === 0) {
    return
  }

  const digestPath = await locatePath(digests)
  if (digestPath === undefined) {
    return
  }

  const hash = await hashFile(digestPath)
  return hash
}

// Hash a file's contents
const hashFile = async function (path: string) {
  const contentStream = createReadStream(path, 'utf8')
  const hashStream = createHash(HASH_ALGO, { encoding: 'hex' })
  contentStream.pipe(hashStream)
  const hash = await getStream(hashStream)
  return hash
}
