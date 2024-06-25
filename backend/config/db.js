const monoogse=require("mongoose")

const conectDB= ()=>
{
    try{
        monoogse.connect("mongodb://localhost:27017/student")
        console.log("Database Connect")
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports=conectDB;