const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.get('/', (req, res, next)=>{
    //res.send('Express on Vercel');
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});

//Export the Express API
module.exports = app;