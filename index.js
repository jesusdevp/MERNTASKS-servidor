const express = require("express");
const conectarDB = require("./config/db");

// Crear servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Leer datos que el usuario coloque
app.use(express.json({ extend: true }));

// puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use("/api/usuarios", require("./routes/users"));

//Definir la pagina principal
// app.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

// arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT} `);
});
