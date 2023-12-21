const registration = require("../Models/registration");

exports.updateUser =  async (req,res) =>{
    try {

        const {id} = req.params;
        const {Fname,Lname,Gmail,Mobile} = req.body;
        const  response = await registration.findByIdAndUpdate 
        (
             {_id:id }/*find id  */
            ,{
                Fname,
                Lname,
                Gmail,
                Mobile  
                //yaha hume kya update karna hai likhege
            } ) ;
        res.status(200).json({
            sucess:true,
            data:response,
            message:"Update all data"
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

