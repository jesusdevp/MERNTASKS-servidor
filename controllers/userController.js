const Usuario = require("../models/User");

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;
    // crea el nuevo usuario
    usuario = new Usuario(req.body);

    // guardar usuario
    await usuario.save();
    // Mensaje de confirmacion
    res.send("Usuario creado correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
