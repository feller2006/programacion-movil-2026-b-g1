
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonNote,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

type ClassSession = {
  id: number;
  course: string;
  date: string;
  time: string;
};

const sessions: ClassSession[] = [
  {
    id: 1,
    course: 'Course A',
    date: '2026-09-07',
    time: '10:00',
  },
  {
    id: 2,
    course: 'Course A',
    date: '2026-09-02',
    time: '10:00',
  },
];

const ClassListPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Class Sessions</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Course A</h2>
        <p>Scheduled class sessions</p>

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
                onClick={() =>
                  history.push(`/class-session/${session.id}`)
                }
              >
                Open
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ClassListPage;
