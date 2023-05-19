const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors())

// servira para entender y puedo leer las peticiones de HTML
app.use(express.urlencoded({ extended: false })) 

app.use('/api', userRoutes);


// mongodb Conectando
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('conectado a la base de datos de mongoDB Atlas'))
  .catch(error=> console.error(error));


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})