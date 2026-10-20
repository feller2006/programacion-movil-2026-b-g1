
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

const sessions = [
  { id: 1, course: 'Course A', date: '2026-09-07', time: '10:00' },
  { id: 2, course: 'Course A', date: '2026-09-02', time: '10:00' },
];

const ClassDetailPage: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const session = sessions.find((item) => item.id === Number(sessionId));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/classes" />
          </IonButtons>
          <IonTitle>Class Session Detail</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {!session ? (
          <div>
            <h2>Session not found</h2>
            <p>The requested class session does not exist.</p>
          </div>
        ) : (
          <>
            <h2>{session.course}</h2>
            <IonList>
              <IonItem>
                <IonLabel>
                  <h3>Session ID</h3>
                  <p>{session.id}</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h3>Date</h3>
                  <p>{session.date}</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h3>Time</h3>
                  <p>{session.time}</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ClassDetailPage;
