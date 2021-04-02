const express= require('express');
const student=require('./routes/student.route')

const bodyparser=require('body-parser')
const mongoose=require('mongoose')


var app= express();

mongoose.connect("mongodb://localhost/studentsDb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to the Databases');
})
.catch(err=>{
    console.log("Cannot Connected to the databases",err);
    process.exit();
})
app.use('/student',student)

var server=app.listen(8080,()=>{
    console.log("Server is up and running at port 8080")
})

