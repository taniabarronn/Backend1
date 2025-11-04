import {Router} from "express"
import {nuevoContacto, mostrarContactos, buscarPorId, editarContacto, borrarContacto, buscarContacto} from "../bd/contactoBD.js"
const router = Router()

var artistas = ["Bethoven", "Van Gog", "Mozart", "Picasso"]

router.get("/",(req,res) => {
	res.render("home", {artistas})
})

router.get("/info/:c",(req,res) => { //Los dos puntos son para mandar a llamar una variable en la ruta 
	var c = req.params.c //req es la variable para recibir datos de otro lugar, res es para mandarlos
	console.log(c)
	res.render("info",{c})
})

router.get("/contactanos",(req, res) => {
	res.render("contactanos")
})

router.post("/contactanos", async (req, res) => {
	var nombre = req.body.nombre //se usa body porque los datos se están obteniendo de un formulario
	var edad = req.body.edad
	console.log("Nombre: "+nombre+" Edad: "+edad)
	const respuestaMongo = await nuevoContacto(req.body) 
	console.log(respuestaMongo)
	res.render("respuesta", {nombre, edad}) //todas la rutas deberían terminar con el res
})

router.get("/mostrarContactos", async (req,res) => {
	const contactosBD = await mostrarContactos()
	res.render("mostrarContactos",{contactosBD})
})

router.get("/editar/:id", async (req,res) => {
	const id = req.params.id //se usa params para datos obtenidos del url
	const contactoBD = await buscarPorId(id)
	res.render("editarContacto", {contactoBD})
})

router.post("/editarContacto", async (req,res) => {
	const respuestaMongo = await editarContacto(req.body)
	console.log(respuestaMongo)
	res.redirect("/mostrarContactos")
})

router.get("/borrar/:id", async (req,res) => {
	const id = req.params.id
	const respuestaMongo = await borrarContacto(id)
	res.redirect("/mostrarContactos")
})

router.post("/buscarContacto", async (req,res) => {
	const nombre = req.body.nombre
	const contactosBD = await buscarContacto(nombre)
	res.render("mostrarContactos",{contactosBD})
})

export default router