const registration = require("../Models/registration");

exports.deleteUser =  async (req,res) =>{
    try {

        const {id} = req.params;
        const  response = await registration.findByIdAndDelete 
        (
             {_id:id }/*find id  */
         ) ;
        res.status(200).json({
            sucess:true,
            data:response,
            message:"Delete data sucessfully"
        });
}
catch(err){
    //if not then send message
    console.log(`bhai gadbad hai yaha ${err}`);
    res.status(500).json({
        sucess:false,
        error:`internal error ${err.message}`,
        message:`eroor occured ${err.message}`
    })
}
}

