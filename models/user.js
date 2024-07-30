const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        gender:{
            type:String,
            enum:["Male",'Female'],
            required:true,
        },
        bloodgroup:{
            type:String,
            enum:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
            required:true,
        },
        phonenumber:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            enum:['Andhra Pradesh','Telangana'],
            required:true,
        },
        city:{
            type:String,
            enum:['Anathapur','Chittor','East Godavari','Guntur','kadapa',
            'Krishna','Kurnool','Nellore','Prakasam','Srikakulam'
            ,'Vizianagaram','Visakhapatnam','West Godavari',
            'Adilabad','Hyderabad','Karimnagar','Khammam','Mahaboobnagar',
            'Medak','Nalgonda','Nizamabad','Rangareddy','Warangal'],
            required:true,
        },
        WillDonate:{
           type:String,
           enum:['Yes','No'],
        },
        password:{
            type:String,
            required:true,
        }
        
    }
)

const user=mongoose.model("user",userSchema);
module.exports=user;