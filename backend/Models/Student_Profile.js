const mongooose=require("mongoose");


const studentprofileschema= new mongooose.Schema({
    Student_name:{
        type:String,
        required:[true,"Enter student name"]
    },
    Father_name:{
        type:String,
        required:[true,"Enter student father's name"]
    },
    Mother_name:{
        type:String,
        required:[true,"Enter student mother's name"]
    },
    Gender:{
        type:String,
        required:true
    },
    Data_of_birth:{
        type:Date,
    },
    Email:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    Department:{
        type:String,
        required:true,
    },
    Hall_NO:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    adress:{
        State:{
          type:String
        },
        City:{
            type:String
          },
        Zipcode:{
            type:String
          },
    }
})

module.exports=mongooose.model("student",studentprofileschema);