const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require("./db");
const collection = "todo" ;

db.connect((err)=> {
    if(err){
        console.log('Unable to connect to Database');
        process.exit(1);
    }
    else{
        app.listen(4000, () =>{
            console.log('connected to database, app listening on port 4000');
        });
    }
});
