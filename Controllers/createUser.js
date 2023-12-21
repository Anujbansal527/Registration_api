const registration = require("../Models/registration");

exports.createUser =  async (req,res) =>{
    try {
        const { Fname,Lname,Gmail,Mobile } = req.body;
        const  response = await registration.create(
            {Fname,Lname,Gmail,Mobile});
        res.status(200).json({
            sucess:true,
            data:response,
            message:"User created successfull"
        });
}
catch(err){
    //if not then send message
    console.err(err);
    res.status(500).json({
        sucess:false,
        data:"internal error",
        message:err.message
    })
}
}

