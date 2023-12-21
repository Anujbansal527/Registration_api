const express = require("express");
const router = express.Router();

const {createUser} =  require("../Controllers/createUser")
const {findUser,findOneUser} = require("../Controllers/findUser");
const { updateUser } = require("../Controllers/updateUser");
const {deleteUser} = require("../Controllers/deleteUser");

router.post("/create", createUser);
router.get("/find", findUser);
router.get("/find/:id", findOneUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);


//export for useable for other
module.exports =  router;


