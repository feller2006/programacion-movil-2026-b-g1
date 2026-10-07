import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useNavigate } from 'react-router-dom';

const Segunda: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Segunda Página</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Esta es la segunda página</h2>

        <IonButton
          expand="block"
          onClick={() => navigate('/home')}
        >
          Volver
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Segunda;