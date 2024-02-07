const cluster = require("node:cluster")
const os = require("node:os")
const express = require('express')

const numOfCpu = os.availableParallelism()
// console.log(cluster.isMaster);
if (cluster.isMaster) {
    console.log(`Primary ${process.pid} is running`);
    for (let i = 0; i < numOfCpu/2; i++) {
        cluster.fork()
    }
} else {
    const app = express()
    const port = 3000

    app.get('/', (req, res) => res.json({ message: `Resolved process id is: ${process.pid} ` }))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    console.log(`Worker ${process.pid} started`);
}