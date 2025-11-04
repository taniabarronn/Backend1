import express from "express"
import rutas from "./routes/rutas.js"
import conectarBD from "./bd/bd.js"

const app = express()

async function conexion(){
	await conectarBD()
}

conexion()

app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")
app.set("views", "./views") 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rutas
app.use("/", rutas)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log("Aplicación en http://localhost:" + PORT)
})
