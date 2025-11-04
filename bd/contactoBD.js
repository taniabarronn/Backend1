import Contacto from "../models/modelContacto.js"

export async function nuevoContacto ({nombre, edad}){ //async es necesario cuanso se usa la función await: espera de respuesta
	const contacto = new Contacto ({nombre, edad}) //Crea el objeto con los campos, el objeto se llama Contacto
	const respuestaMongo = await contacto.save() //Sale de JAVA y guarda el objeto en mongoose
	return respuestaMongo 
}

export async function mostrarContactos(){
	const contactosBD = await Contacto.find()
	return contactosBD
}

export async function buscarPorId(id){
	const contactoBD = await Contacto.findById(id)
	return contactoBD
}

export async function editarContacto({id, nombre, edad}){
	const respuestaMongo = await Contacto.findByIdAndUpdate(id, {nombre, edad})
	return respuestaMongo
}

export async function borrarContacto(id){
	const respuestaMongo = await Contacto.findByIdAndDelete(id)
	return respuestaMongo
}

export async function buscarContacto(nombre){
	const contactosBD = await Contacto.find({nombre})
	return contactosBD
}