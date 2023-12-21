const mongoose = require("mongoose");

//creating data base structurewith validations
const Registration = new mongoose.Schema(
    {
        Fname:{
            type:String,
            require:true,
            maxlength:100,
            minlength:2
        },
        Lname:{
            type:String,
            require:true,
            maxlength:100,
            minlength:2
        },
        Gmail:{
            type:String,
            require:true,
            maxlength:100,
            minlength:2
        },
        Mobile:{
            type:Number,
            require:true,
            maxlength:12,
            minlength:10
        }
   }
);

//export for useable for other
module.exports = mongoose.model("registers", Registration)
                     //iss name se hum use karege //yaha humne apne schema ko bheja hai