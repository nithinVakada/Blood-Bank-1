const mongoose=require("mongoose");

const bankSchema=new mongoose.Schema(
    {
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
    }
)

const bank=mongoose.model("bank",bankSchema);
module.exports=bank;