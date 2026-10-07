# Week 10 - Mini Integrated App

## Description

This activity integrates an Express backend with an Ionic React frontend.

The application allows users to:

- List tasks from the backend.
- Create new tasks.
- Navigate to a detail page.
- Handle basic network errors.

## Backend

The backend was developed with Node.js, Express and CORS.

It includes:

```text
GET /tareas
POST /tareas



The server runs at:
http://localhost:3000

To run the backend:
npm install
node index.js

Frontend
The frontend was developed with Ionic React.
It includes:
- Task list using data from the API.
- Form to create new tasks.
- Navigation to a task detail page.
- Error handling using try/catch.
To run the frontend:
npm install
ionic serve

The application runs at:
http://localhost:8100

Fetch - Load Tasks
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

Fetch - Create Task
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
      body: JSON.stringify({ titulo })
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

Navigation
Each task includes a button to open its detail page.
Example route:
/detalle/1

The route was added in App.tsx:
<Route path="/detalle/:id" element={<Detalle />} />

The detail page displays:
- Task ID
- Task title
- Button to return to the main page
Result
The frontend and backend work together correctly.
The application can list tasks, create new tasks, navigate to a detail page and handle basic connection errors.
