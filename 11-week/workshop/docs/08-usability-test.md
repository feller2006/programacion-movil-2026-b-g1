# CP8 — Usability Test

## Objective

Evaluate the class session list, detail and creation form in Attendance Control.

## Participants

Two real participants tested the application.

## Tasks

1. Open the first Course A session and review its details.
2. Complete and submit the Create Class Session form.
3. Start filling the form and discard the changes.

## Recorded action times

| Action | Participant 1 | Participant 2 |
| --- | --- | --- |
| Open Course A detail | 2.11 s | 2.15 s |
| Open Create Session form | 0.65 s | 0.55 s |
| Submit completed form | 1.46 s | 1.98 s |
| Final button action | 1.10 s | 1.02 s |

These are times for individual actions, not full task durations.

## Results

Both participants navigated through the application and completed the demonstrated interactions.

Both participants identified the same issue: after submitting a class session, it did not appear in the class list.

No other difficulties were reported.

## Usability finding

**Issue:** A newly submitted session is not displayed in the list.

**Expected behavior:** Users expect to see the session after creating it.

**Actual behavior:** The form simulates submission without saving data.

**Impact:** The confirmation message can create an incorrect expectation.

## Improvement opportunities

1. Make demo mode clearly visible.
2. Clarify that validation does not save the session.
3. Add real persistence when integrating the team backend.

These are related aspects of the same observed issue, not three separate observed errors.

## Planned correction

Update the form to clearly indicate that submission is simulated and no session is saved.

## Limitations

The application currently uses simulated data and does not persist newly created sessions.

## Implemented correction

Both participants expected a newly submitted class session to appear in the class list.

The form feedback was updated to clarify that the application is running in demo mode.

Changes implemented:
- Added a visible demo-mode notice.
- Renamed the submit button to "Validate Session".
- Updated the success toast to "Form validated. No session was saved."

This improves the accuracy of user feedback but does not implement real data persistence.

## Follow-up verification

Build completed successfully.

Manual verification of the updated messages is pending.
