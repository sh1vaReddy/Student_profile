const studentmodel=require("../Models/Student_Profile")

exports.createstudent=async(req,res)=>{
    const{Student_name,Father_name,Mother_name,Gender, Data_of_birth,Email,year,Department,Hall_NO,phone,adress}=req.body
    try{
        const student=await studentmodel.create({
            Student_name:Student_name,
            Father_name:Father_name,
            Mother_name:Mother_name,
            Gender:Gender,
            Data_of_birth:Data_of_birth,
            Email:Email,
            year:year,
            Department:Department,
            Hall_NO:Hall_NO,
            phone:phone,
            adress: adress
        })

        res.status(200).send(student);
    }

    catch(error)
    {
        res.status(500).send(error.message)
    }

   
}


exports.getstudent=async(req,res)=>{
    const {Hall_NO}=req.body
    try{
        const student=await studentmodel.findOne({Hall_NO:Hall_NO})
        res.status(200).send(student);
    }
    catch(error)
    {
        res.status(500).send(error.message)
    }

   


}