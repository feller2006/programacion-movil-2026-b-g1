
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClassListPage from '../presentation/ClassListPage';
import { getClassSessions } from '../data/class-sessions-api';

vi.mock('../data/class-sessions-api', () => ({
  getClassSessions: vi.fn(),
}));

const mockedGetSessions = vi.mocked(getClassSessions);

describe('ClassListPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.history.replaceState({}, '', '/classes?scenario=error');
  });

  it('shows an error and retries loading sessions', async () => {
    mockedGetSessions.mockRejectedValue(
      new Error('No se pudieron cargar las clases.'),
    );

    render(
      <MemoryRouter initialEntries={['/classes?scenario=error']}>
        <ClassListPage />
      </MemoryRouter>,
    );

    expect(
      await screen.findByText('Could not load class sessions'),
    ).toBeTruthy();

    expect(mockedGetSessions).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Retry'));

    await waitFor(() => {
      expect(mockedGetSessions).toHaveBeenCalledTimes(2);
    });
  });
});
