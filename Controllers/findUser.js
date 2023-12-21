const registration = require("../Models/registration");

exports.findUser =  async (req,res) =>{
    try {
        const { Fname,Lname,Gmail,Mobile } = req.body;
        const  response = await registration.find(
            { });
        res.status(200).json({
            sucess:true,
            data:response,
            message:"Fetched all data that is present"
        });
}
catch(err){
    //if not then send message
    console.err(err);
    res.status(500).json({
        sucess:false,
        data:"internal error",
        message:`eroor occured ${err.message}`
    })
}
}

exports.findOneUser =  async (req,res) =>{
    try {

        const id = req.params.id;
        const  response = await registration.findById 
        ({
           _id:id
         });
         if(!registration){
            return (
                res.status(400).json({
                    sucess:false,
                    message:"No Data Found"
                })
            )
         }
        res.status(200).json({
            sucess:true,
            data:response,
            message:"Fetched all data by id"
        });
}
catch(err){
    //if not then send message
    console.log(`bhai gadbad hai yaha ${err}`);
    res.status(500).json({
        sucess:false,
        data:"internal error",
        message:`eroor occured ${err.message}`
    })
}
}

