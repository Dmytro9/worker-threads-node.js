'use strict'

const WorkerPool = require('workerpool')
const Path = require('path')

let poolProxy = null
let pool = null

// FUNCTIONS
const init = async (options) => {
  pool = WorkerPool.pool(Path.join(__dirname, './thread-functions.js'), options)
  poolProxy = await pool.proxy()
  console.log(`Worker Threads Enabled - Min Workers: ${pool.minWorkers} - Max Workers: ${pool.maxWorkers} - Worker Type: ${pool.workerType}`)
}

const get = () => {
  return poolProxy
}

const stats = () => {
    return pool.stats();
  };

// EXPORTS
exports.init = init
exports.get = get
exports.stats = stats