import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useLocation, useNavigate } from 'react-router-dom';

interface Tarea {
  id: number;
  titulo: string;
}

const Detalle: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tarea = location.state as Tarea;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalle de la Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {tarea ? (
          <>
            <h2>{tarea.titulo}</h2>
            <p>ID: {tarea.id}</p>

            <IonButton
              expand="block"
              onClick={() => navigate('/home')}
            >
              Volver
            </IonButton>
          </>
        ) : (
          <>
            <p>No se encontró la tarea.</p>

            <IonButton
              expand="block"
              onClick={() => navigate('/home')}
            >
              Volver
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Detalle;