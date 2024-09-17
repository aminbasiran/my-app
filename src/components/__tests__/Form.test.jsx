import { render, screen } from '@testing-library/react';
import Form from '../Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  test('should render a checkbox and submit button', () => {
    render(<Form />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).not.toBeEnabled();
  });

  test('should be enabled when user clicked checkbox', async () => {
    render(<Form />);

    const checkbox = screen.getByRole('checkbox');
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
  });
});
