const express=require('express');
const router=express.Router()
const student=require("../controllers/student_Profile")

router.route("/student").post(student.createstudent)
router.route("/rollno").post(student.getstudent)


module.exports=router