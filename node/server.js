'use strict';
const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const os = require('os');
var hostname = os.hostname();

const app = express();
app.get('/', (req, res) => {
  res.send('HostName : ' + hostname);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
