const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tareas = [
  {
    id: 1,
    titulo: 'Estudiar Programación Móvil'
  },
  {
    id: 2,
    titulo: 'Realizar actividad Semana 8'
  }
];

// GET - Listar tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// POST - Crear tarea
app.post('/tareas', (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({
      error: 'El título es obligatorio'
    });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo
  };

  tareas.push(nuevaTarea);

  res.status(201).json(nuevaTarea);
});

app.listen(PORT, () => {
  console.log(`API ejecutándose en http://localhost:${PORT}`);
});