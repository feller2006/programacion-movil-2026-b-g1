import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import Saludo from '../components/Saludo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Componente Saludo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <Saludo nombre="Rosfeller" />
      </IonContent>
    </IonPage>
  );
};

export default Home;