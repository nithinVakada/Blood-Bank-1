const mongoose=require("mongoose");

const dbConnect=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017");
        console.log("Db connected succesfully");
    }
    catch(error){
        console.log("Connection failed"+error);
    }
}
dbConnect();
