'use strict'

const Express = require('express')
const App = Express()
const HTTP = require('http')
const WorkerCon = require('./worker-pool/controller')
const Utilities = require('./utilities')

// Router Setup
App.get('/bcrypt', async (req, res) => {
  const password = 'This is a long password'
  let result = null
  let workerPool = null
  // let stats = null

  if (true) {
    workerPool = WorkerCon.get()
    result = await workerPool.bcryptHash(password)
  } else {
    result = await Utilities.bcryptHash(password)
  }

  // stats = WorkerCon.stats()
  // console.log('===== ===== ==== ', stats);

  res.send(result)
})

// Server Setup
const port = 5000
const server = HTTP.createServer(App)

;(async () => {
  // Init Worker Pool
  if (true) {
    const options = { minWorkers: 'max' }
    await WorkerCon.init(options)
  }

  // Start Server
  server.listen(port, () => {
    console.log('NodeJS Performance Optimizations listening on: ', port)
  })
})()