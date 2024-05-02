const express = require("express");
const app = express();
const PUERTO = 8080;
const usuariosRouter = require("./routes/usuarios.router.js");
const manejadorError = require("./middleware/error.js");

//Utilizamos compresión:  npm install express-compression
const compression = require("express-compression");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(compression());

// app.use(compression({
//     brotli: {
//         enabled: true,
//         zlib: {}
//     }
// }));

//Middleware para el manejo de errores:

app.use("/usuarios", usuariosRouter);
app.use(manejadorError);

//Rutas
// app.get("/", (req, res) => {
//     let string = "Hola coders, somos programadores y no sabemos arreglar impresoras";

//     for (let i = 0; i < 5e4; i++) {
//         string += "Hola coders, somos programadores y no sabemos arreglar impresoras";
//     }

//     res.send(string);
// })

app.listen(PUERTO, () => {
  console.log("Escuchando en el puerto de Mar del Plata");
});

//Sin compresión: 1.3 mb
//Con compresión 11.4 kb
//Con brotli 357 bytes
