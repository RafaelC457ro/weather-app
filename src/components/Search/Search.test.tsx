import { expect, test, describe, beforeAll, afterEach, afterAll, vi } from 'vitest';
import { setupServer } from 'msw/node';
import { render as rtlRender, RenderResult, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Search } from './Search';

const handlers = [
  http.get('https://api.openweathermap.org/geo/1.0/direct', () => {
    console.log('test');
    return HttpResponse.json([
      {
        name: 'New York County',
        lat: 40.7127281,
        lon: -74.0060152,
        country: 'US',
        state: 'New York',
      },
      {
        name: 'New York',
        local_names: {
          ta: 'நியூ யோர்க்',
          en: 'New York',
        },
        lat: 55.0252998,
        lon: -1.4869496,
        country: 'GB',
        state: 'England',
      },
      {
        name: 'New York',
        local_names: {
          ta: 'நியூ யோர்க்',
          en: 'New York',
        },
        lat: 39.6852874,
        lon: -93.9268836,
        country: 'US',
        state: 'Missouri',
      },
      {
        name: 'New York',
        lat: 7.9631123,
        lon: -11.7636869,
        country: 'SL',
        state: 'Bo District',
      },
      {
        name: 'Lake Oswego',
        local_names: {
          ja: 'レイクオスウィーゴ',
          en: 'Lake Oswego',
        },
        lat: 45.4206749,
        lon: -122.670649,
        country: 'US',
        state: 'Oregon',
      },
    ]);
  }),
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function render<T>(_ui: React.ReactElement<T>): RenderResult {
  return {
    ...rtlRender(<QueryClientProvider client={queryClient}>{_ui}</QueryClientProvider>),
  };
}

describe('Search', () => {
  test('it should display list of places when fill the input', async () => {
    const onChange = vi.fn();
    render(<Search onChange={onChange} />);

    userEvent.type(screen.getByTestId('search-input'), 'New Work');

    await waitFor(() => screen.getByText('New York County - New York - US'));

    expect(screen.getByText('New York County - New York - US')).toBeInTheDocument();
  });

  test('it should display error message when request fails', async () => {
    const onChange = vi.fn();
    server.use(
      http.get('https://api.openweathermap.org/geo/1.0/direct', () => {
        return new HttpResponse('Error', {
          status: 500,
        });
      }),
    );
    render(<Search onChange={onChange} />);

    userEvent.type(screen.getByTestId('search-input'), 'New Work');

    await waitFor(() => screen.getByText('An error occurred.'));

    expect(screen.getByText('An error occurred.')).toBeInTheDocument();
  });

  test('it should call onChange when user select a place', async () => {
    const onChange = vi.fn();
    render(<Search onChange={onChange} />);

    userEvent.type(screen.getByTestId('search-input'), 'New Work');

    await waitFor(() => screen.getByText('New York County - New York - US'));

    userEvent.click(screen.getByText('New York County - New York - US'));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith({
        name: 'New York County',
        lat: 40.7127281,
        lon: -74.0060152,
        country: 'US',
        state: 'New York',
      });
    });
  });
});
