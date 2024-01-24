import { expect, test, describe } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Settings } from './Settings';
import { UnitProvider } from '../../libs/hooks/use-unit/use-unit';

describe('Settings', () => {
  test('should change temperature unit', async () => {
    render(
      <UnitProvider>
        <Settings />
      </UnitProvider>,
    );

    // get by test id
    const settingsButton = screen.getByTestId('settings-button');

    userEvent.click(settingsButton);

    await waitFor(() => screen.getByText('Fahrenheit'));

    const fahrenheitButton = screen.getByText('Fahrenheit');

    userEvent.click(fahrenheitButton);

    const updated = screen.getByText('Fahrenheit');
    await waitFor(() => expect(updated).toHaveAttribute('data-selected', 'true'));
  });

  test('should get value from localStorage', async () => {
    localStorage.setItem('unit', 'Celsius');

    render(
      <UnitProvider>
        <Settings />
      </UnitProvider>,
    );

    const settingsButton = screen.getByTestId('settings-button');

    userEvent.click(settingsButton);

    await waitFor(() => screen.getByText('Celsius'));

    const fahrenheitButton = screen.getByText('Celsius');

    await waitFor(() => expect(fahrenheitButton).toHaveAttribute('data-selected', 'true'));
  });
});
