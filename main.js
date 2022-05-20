const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// const db = require('./config/config')

app.use('/users', require('./routes/users'));
 
app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));