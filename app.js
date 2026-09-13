const express = require('express');
const path = require('path');
const app = express();
const PORT = 9000;

const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');
const dbRouter = require('./routes/db_routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.use('/db', dbRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});