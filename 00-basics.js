'use strict'

// function singleThread()
// {
//     console.log(`---------------------------------`);
//     console.log(`         NODE.JS PROCESS         `);
//     console.log(`Process ID: ${process.pid}`);
//     console.log(`Title: ${process.title}`);
//     console.log(`Node Directory: ${process.execPath}`);
//     console.log(`Actual Directory: ${process.cwd()}`);
//     console.log(`Node Version: ${process.version}`);
//     console.log(`Dependency Versions: ${process.versions}`);
//     console.log(`Operational System: ${process.platform}`);
//     console.log(`Architecture: ${process.arch}`);
//     console.log(`Avtive time (Node): ${process.uptime()}`);
//     console.log(`Process Arguments: ${process.argv}`);
//     console.log(`---------------------------------`);
// }

// singleThread()

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});