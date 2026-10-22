
import { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import {
  getClassSessions,
  type ClassSession,
} from '../data/class-sessions-api';

type DetailStatus = 'loading' | 'ready' | 'error';

const ClassDetailPage: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [status, setStatus] = useState<DetailStatus>('loading');
  const [session, setSession] = useState<ClassSession | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const loadSession = async () => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const scenario = new URLSearchParams(
        window.location.search,
      ).get('scenario');

      const data = await getClassSessions(
        scenario === 'error' ? 'error' : 'normal',
      );

      const found = data.find(
        (item) => item.id === Number(sessionId),
      );

      setSession(found ?? null);
      setStatus('ready');
    } catch (error) {
      setSession(null);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Could not load session details.',
      );
      setStatus('error');
    }
  };

  useEffect(() => {
    void loadSession();
  }, [sessionId]);

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
        {status === 'loading' && (
          <IonList aria-label="Loading session details">
            {[1, 2, 3].map((item) => (
              <IonItem key={item}>
                <IonLabel>
                  <IonSkeletonText animated style={{ width: '65%' }} />
                  <IonSkeletonText animated style={{ width: '35%' }} />
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}

        {status === 'error' && (
          <section role="alert">
            <h2>Could not load session</h2>
            <p>{errorMessage}</p>
            <IonButton onClick={() => void loadSession()}>
              Retry
            </IonButton>
          </section>
        )}

        {status === 'ready' && !session && (
          <section>
            <h2>Session not found</h2>
            <p>The requested class session does not exist.</p>
            <IonButton routerLink="/classes">
              Back to classes
            </IonButton>
          </section>
        )}

        {status === 'ready' && session && (
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
