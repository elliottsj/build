import { env } from 'process'

import { git } from './exec.js'

// Retrieve the `head` commit
export const getHead = function (cwd, head = 'HEAD') {
  const result = checkRef(head, cwd)
  if (result.error !== undefined) {
    throwError('head', result)
  }
  return result.ref
}

// Retrieve the `base` commit
export const getBase = function (base, head, cwd) {
  const refs = getBaseRefs(base, head)
  const { ref } = findRef(refs, cwd)
  return ref
}

const getBaseRefs = function (base, head) {
  if (base !== undefined) {
    return [base]
  }

  if (env.CACHED_COMMIT_REF) {
    return [env.CACHED_COMMIT_REF]
  }

  // Some git repositories are missing `master` or `main` branches, so we also try HEAD^.
  // We end with HEAD as a failsafe.
  return ['main', 'master', `${head}^`, head]
}

// Use the first commit that exists
const findRef = function (refs, cwd) {
  const results = refs.map((ref) => checkRef(ref, cwd))
  const result = results.find(refExists)
  if (result === undefined) {
    throwError('base', results[0])
  }
  return result
}

// Check if a commit exists
const checkRef = function (ref, cwd) {
  try {
    git(['rev-parse', ref], cwd)
    return { ref }
  } catch (error) {
    return { ref, error }
  }
}

const refExists = function ({ error }) {
  return error === undefined
}

const throwError = function (
  name: string,
  {
    ref,
    error: { message, stderr },
  }: {
    ref: string
    error?: {
      stderr?: string
      message?: string
    }
  },
) {
  const messages = [message, stderr].filter(Boolean).join('\n')
  const messageA = `Invalid ${name} commit ${ref}\n${messages}`
  throw new Error(messageA)
}
