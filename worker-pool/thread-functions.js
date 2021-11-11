'use strict'

const WorkerPool = require('workerpool')
const Utilities = require('../utilities')

// MIDDLEWARE FUNCTIONS
const bcryptHash = (password) => {
  return Utilities.bcryptHash(password)
}

// CREATE WORKERS
WorkerPool.worker({
  bcryptHash
})