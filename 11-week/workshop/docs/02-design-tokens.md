
# CP2 — Navigation and Design Tokens

## Application

Attendance Control is a mobile application for managing attendance through QR codes.

This checkpoint focuses on the teacher's class session list and class session detail.

## Navigation pattern

A stack navigation pattern was selected because the teacher opens a class session from the list and can return to the previous screen.

Main routes:

- `/classes` — Class session list
- `/class-session/:sessionId` — Class session detail

The implementation uses Ionic React, React Router, and IonBackButton.

## Design tokens

| Token | Value | Purpose |
|---|---|---|
| Primary | `#006B35` | Main buttons and actions |
| Secondary | `#164E63` | Secondary interface elements |
| Success | `#006B35` | Successful actions |
| Danger | `#B42318` | Error and destructive actions |
| Background | `#FFFFFF` | Main screen background |
| Text | `#1F2937` | Main content |
| Small font | `0.875rem` | Supporting information |
| Base font | `1rem` | Regular content |
| Title font | `1.5rem` | Screen headings |
| Small spacing | `0.5rem` | Small gaps |
| Medium spacing | `1rem` | Default spacing |
| Large spacing | `1.5rem` | Section spacing |
| Border radius | `0.75rem` | Rounded elements |

These are implementation tokens proposed for the workshop, based on the team's design guidelines.

## Contrast verification

Contrast was checked using WebAIM Contrast Checker.

| Foreground | Background | Contrast | Result |
|---|---|---|---|
| `#FFFFFF` | `#009540` | 3.9:1 | Fails WCAG AA for normal text |
| `#FFFFFF` | `#006B35` | 6.65:1 | Passes WCAG AA for normal text |

The original green was replaced with a darker green to improve text readability.

Other token combinations must also be checked before considering the complete palette accessible.

## Implementation

The design tokens are defined in:

`app/src/app/theme/variables.css`

The navigation routes are configured in:

`app/src/app/App.tsx`

The implemented screens are:

- `ClassListPage.tsx`
- `ClassDetailPage.tsx`

The current sessions use temporary data based on the original team wireframe. Backend integration and loading states remain pending.
