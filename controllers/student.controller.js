const student=require('../models/student.model');


exports.test=(req,res)=>{
    res.sent("Cheer up, Controller is working fine")

}
exports.add=(req,res)=>{
let student=new Student({
name: req.body.name,
regid:req.body.regid,
sec:req.body.sec
});
student.save((err)=>{
if(err){
    return next(err);
}
res.send("Student added to the system");
})};