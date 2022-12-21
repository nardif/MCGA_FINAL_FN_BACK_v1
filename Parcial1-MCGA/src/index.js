require("dotenv").config(); //llama la función Config de la librería dotenv
const mongoose = require('mongoose') //Guarda una variable con el acceso la librería de Mongoose
const router = require('./routes/index') // Rutas creadas
const express = require('express') //Guarda una variable con el acceso la librería Express
const cors = require('cors');

const app = express(); //Instancia un objeto Express en app y levanta el proceso del servidor
app.use(cors());

app.use(express.json()); // nos permite obtener el cuerpo del json en el el req.body (controllers)
app.use(express.static("public"));

app.use(router); // Le dice a Express que use el Router

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });
  