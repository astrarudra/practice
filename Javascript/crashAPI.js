const cluster = require('cluster');
const process = require('process');
const fetch = require('node-fetch');
const numCPUs = require('os').cpus().length;


const letsCrash = (pid, load) => {
    const api = "https://google.com"
    fetch(api).then(o => console.log(pid, o))
}

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < 1; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else { //  MultiProcess 
  console.log("Started process - " + process.pid)
  loadPerProcess = 500
  letsCrash(process.pid, loadPerProcess)
}