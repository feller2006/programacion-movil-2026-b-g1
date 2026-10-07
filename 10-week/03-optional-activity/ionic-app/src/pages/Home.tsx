import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

interface Tarea {
  id: number;
  titulo: string;
}

const Home: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [titulo, setTitulo] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

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

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mini App de Tareas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            label="Nueva tarea"
            labelPlacement="stacked"
            placeholder="Escribe una tarea"
            value={titulo}
            onIonInput={(e) => setTitulo(e.detail.value ?? '')}
          />
        </IonItem>

        <IonButton
          expand="block"
          onClick={crearTarea}
          className="ion-margin-top"
        >
          Crear tarea
        </IonButton>

        {error && (
          <IonText color="danger">
            <p>{error}</p>
          </IonText>
        )}

        <IonList>
          {tareas.map((tarea) => (
            <IonItem key={tarea.id}>
              <IonLabel>
                {tarea.id}. {tarea.titulo}
              </IonLabel>

              <IonButton
                slot="end"
                onClick={() =>
                  navigate(`/detalle/${tarea.id}`, {
                    state: tarea
                  })
                }
              >
                Ver detalle
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;