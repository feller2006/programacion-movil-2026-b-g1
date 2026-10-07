# Week 8 - REST API with Express and Ionic Fetch

## Description

This activity consists of creating a simple REST API with Express and consuming it from an Ionic React application using `fetch`.

The project includes:

- A REST API with `GET /tareas`.
- A REST API with `POST /tareas`.
- Tests using the browser and Postman.
- An Ionic React application that lists tasks.
- An Ionic React form that creates new tasks.
- Error handling using `try/catch`.

## Project Structure

```text
03-optional-activity
├── api
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── ionic-tareas
│   ├── src
│   ├── package.json
│   └── ...
├── evidencias
│   ├── get-tareas.png
│   ├── post-tareas.png
│   └── ionic-fetch.png
└── README.md



Express API
The API was created with Node.js, Express and CORS.
Install dependencies
npm install express cors

Run API
node index.js

The API runs at:
http://localhost:3000

GET /tareas
This endpoint returns the list of tasks in JSON format.
GET /tareas

Example response:
[
  {
    "id": 1,
    "titulo": "Estudiar Programación Móvil"
  },
  {
    "id": 2,
    "titulo": "Realizar actividad Semana 8"
  }
]

POST /tareas
This endpoint creates a new task.
POST /tareas

Example request:
{
  "titulo": "Preparar parcial"
}

Example response:
{
  "id": 3,
  "titulo": "Preparar parcial"
}

Successful response:
201 Created

API Code
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

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

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

Ionic React Application
The Ionic application consumes the REST API using fetch.
Load tasks
const cargarTareas = async () => {
  try {
    setError('');

    const respuesta = await fetch('http://localhost:3000/tareas');

    if (!respuesta.ok) {
      throw new Error('No se pudieron cargar las tareas');
    }

    const datos = await respuesta.json();
    setTareas(datos);
  } catch {
    setError('Error al conectar con la API');
  }
};

Create task
const crearTarea = async () => {
  if (!titulo.trim()) {
    setError('Escribe el título de una tarea');
    return;
  }

  try {
    setError('');

    const respuesta = await fetch('http://localhost:3000/tareas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titulo
      })
    });

    if (!respuesta.ok) {
      throw new Error('No se pudo crear la tarea');
    }

    setTitulo('');
    await cargarTareas();
  } catch {
    setError('Error al crear la tarea');
  }
};

Error Handling
Both fetch functions use try/catch to handle connection or API errors.
If the API is unavailable, the application displays an error message.
Evidence
GET /tareas

POST /tareas

Ionic Fetch

Result
The Express API was created successfully with GET and POST endpoints.
The Ionic React application successfully consumes the API, lists tasks, creates new tasks, and handles connection errors.
