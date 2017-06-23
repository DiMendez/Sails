/**
 * UserController.jsController
 *
 * @description :: Server-side logic for managing Usercontroller.js
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const series = require("async/series");

function addUser(err, req, cbwf){
	if(!err){
		return User.create({
			nombre: req.body.nombre,
			contraseña: req.body.contraseña,
			edad: req.body.edad,
		}).exec(cbwf);
	}
}
function addUser2(req, cbwf){
		return User.create({
			nombre: req.body.nombre,
			contraseña: req.body.contraseña,
			edad: req.body.edad,
		}).exec(cbwf);
	}


function createUser(req, res)
{
	series([
		(cbwf)=>{ addUser(null, req, cbwf) },
		(cbwf)=>{ addUser2(req, cbwf) },
		], (err, user)=>{
		if (err)
	 		return res.status(500).send("Error")
	 	else
	 		return res.status(201).send("Creo al usuario");
	});
	
}

function readUsers(req, res)
{
	return User.find()
		.then((foundUser)=>{
			res.status(200).json(foundUser);
		}).catch((err)=>{
			res.status(500).send("Algo ocurrió");
		});
}

module.exports = {
	createUser,
	readUsers,
};