const express = require('express');

const app = express();

//RUTAS DE USUARIOS
app.get('/usuarios', (req, res) => {
  console.log('El cliente pidio el listado de todos los usuarios');

  const usuarios = [
    { id: 1, name: 'Linus' },
    { id: 23, name: 'Bill' },
  ];

  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  res.send('Datos del usuario ' + req.params.id);
});

app.post('/usuarios', (req, res) => {
  res.send('Usuario agregado');
});

//RUTAS DE PUBLICACIONES
app.get('/publicaciones', (req, res) => {
  const publicaciones = [
    { id: 1, name: 'Mouse' },
    { id: 345, name: 'Teclado' },
    { id: 211, name: 'Monitor' },
  ];

  res.json(publicaciones);
});

//INICIAR LA ESCUCHA DEL SERVIDOR HTTP
app.listen(8000, () => {
  console.log('Servidor escuchando en el puerto 8000');
});
