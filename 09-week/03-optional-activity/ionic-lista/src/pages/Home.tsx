import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';  

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  const tareas = [
    'Estudiar Programación Móvil',
    'Realizar actividad Semana 9',
    'Preparar parcial',
    'Revisar GitHub',
    'Leer documentación'
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Tareas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {tareas.map((tarea, index) => (
            <IonItem key={index}>
              <IonLabel>
                {index + 1}. {tarea}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonText>
          <h2>Contador: {contador}</h2>
        </IonText>

        <IonButton
          expand="block"
          onClick={() => setContador(contador + 1)}
        >
          Aumentar contador
        </IonButton>

        <IonButton
          expand="block"
          color="secondary"
          onClick={() => navigate('/segunda')}
        >
          Ir a segunda página
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;