const express = require("express");
const authentication = require("../middleware/authentication");

//create product router

const roleRouter = express.Router();

// import role controllers from "roleController"

const { createNewRole } = require("../controllers/RoleContoller");

//create endpoint for create new role
roleRouter.post("/", authentication,createNewRole);

module.exports = { roleRouter };
