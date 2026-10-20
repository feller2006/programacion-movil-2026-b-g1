
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import {
  getClassSessions,
  type ClassSession,
  type SessionScenario,
} from '../data/class-sessions-api';

type LoadStatus = 'loading' | 'ready' | 'error';

const ClassListPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [sessions, setSessions] = useState<ClassSession[]>([]);
  const [status, setStatus] = useState<LoadStatus>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const params = new URLSearchParams(location.search);
  const scenarioParam = params.get('scenario');

  const scenario: SessionScenario =
    scenarioParam === 'empty' || scenarioParam === 'error'
      ? scenarioParam
      : 'normal';

  const loadSessions = useCallback(async () => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const data = await getClassSessions(scenario);
      setSessions(data);
      setStatus('ready');
    } catch (error) {
      setSessions([]);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'No se pudieron cargar las clases.',
      );
      setStatus('error');
    }
  }, [scenario]);

  useEffect(() => {
    void loadSessions();
  }, [loadSessions]);

  const handleRefresh = async (
    event: CustomEvent<{ complete: () => void }>,
  ) => {
    try {
      await loadSessions();
    } finally {
      event.detail.complete();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Class Sessions</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher
          slot="fixed"
          onIonRefresh={handleRefresh}
        >
          <IonRefresherContent />
        </IonRefresher>

        <h2>Course A</h2>
        <p>Scheduled class sessions</p>

        {status === 'loading' && (
          <IonList aria-label="Loading class sessions">
            {[1, 2, 3].map((item) => (
              <IonItem key={item}>
                <IonLabel>
                  <IonSkeletonText
                    animated
                    style={{ width: '65%' }}
                  />
                  <IonSkeletonText
                    animated
                    style={{ width: '35%' }}
                  />
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}

        {status === 'error' && (
          <section role="alert" aria-live="assertive">
            <h3>Could not load class sessions</h3>
            <p>{errorMessage}</p>

            <IonButton
              onClick={() => void loadSessions()}
            >
              Retry
            </IonButton>
          </section>
        )}

        {status === 'ready' && sessions.length === 0 && (
          <section>
            <h3>No class sessions found</h3>
            <p>
              There are no scheduled sessions for this course.
            </p>
            <IonButton
              onClick={() => void loadSessions()}
            >
              Refresh sessions
            </IonButton>
          </section>
        )}

        {status === 'ready' && sessions.length > 0 && (
          <IonList>
            {sessions.map((session) => (
              <IonItem key={session.id}>
                <IonLabel>
                  <h3>{session.date}</h3>
                  <p>{session.time}</p>
                </IonLabel>

                <IonNote slot="end">
                  {session.course}
                </IonNote>

                <IonButton
                  slot="end"
                  aria-label={`Open session ${session.date}`}
                  onClick={() =>
                    history.push(
                      `/class-session/${session.id}`,
                    )
                  }
                >
                  Open
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ClassListPage;
