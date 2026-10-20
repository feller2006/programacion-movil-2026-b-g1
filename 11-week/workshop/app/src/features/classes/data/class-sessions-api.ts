
export type ClassSession = {
  id: number;
  course: string;
  date: string;
  time: string;
};

export type SessionScenario = 'normal' | 'empty' | 'error';

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

export async function getClassSessions(
  scenario: SessionScenario = 'normal',
  delay = 1000,
): Promise<ClassSession[]> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, delay);
  });

  if (scenario === 'error') {
    throw new Error('No se pudieron cargar las clases.');
  }

  if (scenario === 'empty') {
    return [];
  }

  return sessions;
}
