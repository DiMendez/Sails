/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 const bcrypt = require("bcrypt");

module.exports = {

  attributes: {
  	nombre:{
  		type: "string",
  		required: true,
  	},

  	contraseña:{
  		type: "string",
  		required: true,
  	},

  	edad:{
  		type: "integer",
  		required: true,
  		defaultsTo: 5,
  	},

  	amigo: {
  		collection: "user",
  		via: "id",
  	},

  	saluda: () => {
  		console.log("Hola");
  	}


  },

  beforeCreate: (values, cb) => {
  	bcrypt.hash(values.contraseña, 10, (err, hash) =>{
  		if(!err){
  			values.contraseña = hash;
  			return cb(null, values);
  		}
  		else
  			cb(err);
  	});
  },

  saluda: () =>{
  	console.log("Adios");
  },
};

