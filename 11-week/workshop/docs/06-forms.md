# CP6 — Class Session Form

## Objective

Implement a validated class session form for Attendance Control.

## Form fields and validation

| Field | Rule | Reason |
| --- | --- | --- |
| Course | Required, cannot contain only spaces | A session must belong to a course |
| Date | Required | A class session needs a scheduled date |
| Time | Required | A class session needs a scheduled time |

## User feedback

- Validation messages are displayed next to the fields.
- The submit button is disabled when the form is invalid.
- IonSpinner indicates that the submission is processing.
- IonToast confirms successful validation in demo mode.
- A simulated server failure can be tested.
- IonAlert confirms discarding unsaved information.

## Test scenarios

Normal form:
`/classes/new`

Simulated failure:
`/classes/new?scenario=error`

## Technical implementation

- `ClassSessionFormPage.tsx`: form and submission state.
- `ClassSessionFields.tsx`: reusable fields.
- `class-session-validation.ts`: validation rules.
- `App.tsx`: form route.

## Limitations

The form currently simulates submission. It does not create records in the real backend.

## Evidence

Add real screenshots of the validation, successful submission, error, and discard confirmation states.
