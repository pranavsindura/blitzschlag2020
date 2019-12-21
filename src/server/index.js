const express = require('express');
const os = require('os');
const path = require('path');
const app = express();

app.use(express.static('dist'));
app.get('*',(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.resolve('./dist/index.html')) 
})
console.log(process.env.PORT);
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
