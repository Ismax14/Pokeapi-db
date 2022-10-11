const {app} = require('./app.js');
const { PORT } = require('./config.js');

//Empezando servidor

app.listen(PORT, () => {
    console.log('Server escuchando en el puerto ' + PORT);
})
