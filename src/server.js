const express=require('express');
const path=require('path');
const app=express();
app.use(express.static('src/app/dist/angulareczane'));

app.get('/*',function(req,res) {
    res.sendFile(path.join('src/app/dist/angulareczane/index.html'));
});
app.listen(process.env.PORT||8080);





