const express=require('express');
const path=require('path');
const { O_DIRECT } = require('constants');
const app=express();
app.use(express.static(__dirname+'/dist/angulareczane'));

app.get('/*',function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/angulareczane/index.html'));
});
app.listen(process.env.PORT||8080);




