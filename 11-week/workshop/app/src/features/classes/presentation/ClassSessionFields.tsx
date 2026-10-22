
import { IonInput, IonItem } from '@ionic/react';
import type {
  ClassSessionErrors,
  ClassSessionInput,
} from '../domain/class-session-validation';

type Props = {
  values: ClassSessionInput;
  errors: ClassSessionErrors;
  touched: boolean;
  onChange: (field: keyof ClassSessionInput, value: string) => void;
  onBlur: () => void;
};

const ClassSessionFields: React.FC<Props> = ({
  values,
  errors,
  touched,
  onChange,
  onBlur,
}) => (
  <>
    {(['course', 'date', 'time'] as const).map((field) => (
      <div key={field}>
        <IonItem>
          <IonInput
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            labelPlacement="stacked"
            type={
              field === 'date'
                ? 'date'
                : field === 'time'
                  ? 'time'
                  : 'text'
            }
            value={values[field]}
            onIonInput={(event) =>
              onChange(field, String(event.detail.value ?? ''))
            }
            onIonBlur={onBlur}
          />
        </IonItem>
        {touched && errors[field] && (
          <p role="alert">{errors[field]}</p>
        )}
      </div>
    ))}
  </>
);

export default ClassSessionFields;