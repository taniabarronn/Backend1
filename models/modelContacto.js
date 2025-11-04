import mongoose from "mongoose"

const contactoSchema = new mongoose.Schema({
	nombre:{
		type:String,
		required:true,
		trim:true, //Es para recortar los espacios al final o inicio de una cadena de texto 
		unique:false
	},
	edad:{
		type:Number,
		required:false,
		trim:true,
		unique:false
	}
})

export default mongoose.model("Contacto", contactoSchema)