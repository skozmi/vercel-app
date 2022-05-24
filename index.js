const express = require("express");
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(express.static("public"));
//app.use("/client", express.static(__dirname + "/client"));
app.use("/public", express.static(__dirname + "/public"));

app.set('view engine', 'ejs');

app.get('/', (req, res, next)=>{
    //res.send('Express on Vercel');
    //res.sendFile(__dirname + '/index.html');
    res.render('views/main');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});

//Export the Express API
module.exports = app;