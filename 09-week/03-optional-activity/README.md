# Week 9 - Ionic React List, State and Navigation

## Description

This activity implements a simple Ionic React application with a task list, state management using `useState`, and navigation between two pages using React Router.

## Requirements Completed

- Ionic list with at least 5 elements.
- State management using `useState`.
- Second page with navigation.
- Ionic components such as `IonList` and `IonButton`.

## Task List

The main page contains five tasks using Ionic components:

1. Estudiar Programación Móvil
2. Realizar actividad Semana 9
3. Preparar parcial
4. Revisar GitHub
5. Leer documentación

## State with useState

A counter was implemented using React's `useState`.

```tsx
const [contador, setContador] = useState(0);
The counter increases when the user presses the button:
<IonButton onClick={() => setContador(contador + 1)}>
  Aumentar contador
</IonButton>

Navigation
The application includes a second page called Segunda.
Navigation is implemented using React Router and useNavigate.
Navigate to second page
const navigate = useNavigate();

<IonButton onClick={() => navigate('/segunda')}>
  Ir a segunda página
</IonButton>

Return to home page
<IonButton onClick={() => navigate('/home')}>
  Volver
</IonButton>

Routes
The following routes were added in App.tsx:
<Route path="/home" element={<Home />} />
<Route path="/segunda" element={<Segunda />} />
<Route path="/" element={<Navigate to="/home" replace />} />

Result
The application successfully displays a list of five tasks, manages a counter using useState, and allows navigation between the main page and a second pag
