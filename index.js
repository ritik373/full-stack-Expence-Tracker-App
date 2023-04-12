const express = require('express');
const app=express();
const hbs = require('hbs')
const path = require('path');
const controller1=require('./controller/showFront');
const controller2=require('./controller/addExpence');
const bodyparser=require('body-parser');

app.set('views', path.join(__dirname));
app.set('view engine', 'hbs')
app.use(express.static('public'));

app.use(bodyparser.urlencoded({extended:false}));


app.get('/',controller1.FrontPagewithTable);
app.get('/addExpence',controller2.addExpenceItem);
app.post('/addexpence',controller2.insertItem);
app.get('/delete/:id',controller1.DeleteItem);

app.get('/edit/:id',controller2.editItem);

app.post('/edit/:idx',controller2.setEditData)

app.listen(8000,(req,res)=>{
    console.log("listening on port 8000 ....");
})