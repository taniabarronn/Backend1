import mongoose from "mongoose"

function conectarBD(){
	try{
		const conexion = mongoose.connect("mongodb+srv://tibbis:TibbiSSCC02@closter0.d0hma24.mongodb.net/?appName=Closter0")
		//const conexion = mongoose.connect("mongodb://localhost:27017/backend1")//'27017'es el puerto por default de mongodb
		console.log("Conexión establecida con Mongo Átlas")
	}
	catch(err){
		console.log("Error "+err)
	}
}

export default conectarBD
