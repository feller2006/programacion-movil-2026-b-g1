# CP7 — Class Session Detail and Navigation Flow

## Objective

Improve the class session detail screen and complete the navigation flow in Attendance Control.

## Navigation

The class list is available at `/classes`.

The Create Session form is available at `/classes/new`.

A session detail is available at `/class-session/:sessionId`.

## Updated navigation map

```mermaid
flowchart TD
    A[Class Sessions List]
    B[Create Class Session]
    C[Class Session Detail]
    D{Session exists?}
    E[Session Information]
    F[Session Not Found]
    G[Loading Error]

    A -->|Create Session| B
    B -->|Back or Discard| A
    A -->|Open session| C
    C --> D
    D -->|Yes| E
    D -->|No| F
    C -->|Service failure| G
    F -->|Back to classes| A
    G -->|Retry| C
    E -->|Back| A

