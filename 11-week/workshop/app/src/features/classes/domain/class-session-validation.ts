
export type ClassSessionInput = {
  course: string;
  date: string;
  time: string;
};

export type ClassSessionErrors = {
  course: string;
  date: string;
  time: string;
};

export function validateClassSession(
  input: ClassSessionInput,
): ClassSessionErrors {
  return {
    course: input.course.trim()
      ? ''
      : 'Course is required',
    date: input.date
      ? ''
      : 'Date is required',
    time: input.time
      ? ''
      : 'Time is required',
  };
}

export function isClassSessionValid(
  errors: ClassSessionErrors,
): boolean {
  return !errors.course && !errors.date && !errors.time;
}
