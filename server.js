const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname , './public/index.html');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
 

console.log(publicPath);

app.get('/',function(req,res){
       
    res.sendFile(publicPath);

});

app.listen(port , ()=>{ console.log(`       express running on  ${port}`);
});