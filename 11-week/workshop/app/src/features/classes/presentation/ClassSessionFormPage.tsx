
import { useState } from 'react';
import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNote,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import {
  validateClassSession,
  isClassSessionValid,
  type ClassSessionInput,
} from '../domain/class-session-validation';
import ClassSessionFields from './ClassSessionFields';

const emptyForm: ClassSessionInput = {
  course: '',
  date: '',
  time: '',
};

const ClassSessionFormPage: React.FC = () => {
  const history = useHistory();
  const [values, setValues] = useState<ClassSessionInput>({ ...emptyForm });
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [serverError, setServerError] = useState('');

  const errors = validateClassSession(values);
  const isValid = isClassSessionValid(errors);

  const updateField = (field: keyof ClassSessionInput, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setServerError('');
  };

  const handleSubmit = async () => {
    setTouched(true);
    if (!isValid || submitting) return;

    setSubmitting(true);
    setServerError('');

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));

      const scenario = new URLSearchParams(
        window.location.search,
      ).get('scenario');

      if (scenario === 'error') {
        throw new Error('The session could not be validated. Please try again.');
      }

      setShowToast(true);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const discardChanges = () => {
    setValues({ ...emptyForm });
    setTouched(false);
    setServerError('');
    history.push('/classes');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/classes" />
          </IonButtons>
          <IonTitle>Create Class Session — Demo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>New Session</h2>
        <p>Complete the fields to validate a class session.</p>

        <IonNote color="warning">
          Demo mode: this form does not save sessions.
          New sessions will not appear in the class list.
        </IonNote>

        <ClassSessionFields
          values={values}
          errors={errors}
          touched={touched}
          onChange={updateField}
          onBlur={() => setTouched(true)}
        />

        {serverError && <p role="alert">{serverError}</p>}

        <IonButton
          expand="block"
          disabled={!isValid || submitting}
          onClick={() => void handleSubmit()}
        >
          {submitting ? (
            <IonSpinner name="crescent" />
          ) : (
            'Validate Session'
          )}
        </IonButton>

        <IonButton
          expand="block"
          fill="outline"
          disabled={submitting}
          onClick={() => setShowAlert(true)}
        >
          Discard changes
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          header="Discard changes?"
          message="Your unsaved session information will be lost."
          buttons={[
            { text: 'Keep editing', role: 'cancel' },
            {
              text: 'Discard',
              role: 'destructive',
              handler: discardChanges,
            },
          ]}
          onDidDismiss={() => setShowAlert(false)}
        />

        <IonToast
          isOpen={showToast}
          message="Form validated. No session was saved."
          duration={3500}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default ClassSessionFormPage;
