const express = require('express');
const os = require('os');
const path = require('path');
const app = express();

app.use(express.static('dist'));
console.log(process.env.PORT);
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
