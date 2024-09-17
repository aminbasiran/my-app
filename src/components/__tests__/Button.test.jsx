import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';
describe('Button', () => {
  it('should render a button', () => {
    render(<Button label="Click me!" onClick={() => alert('Hello!')} />);
    const button = screen.getByText('Click me!');
    expect(button).toBeInTheDocument();
  });

  it('should not render edit button when editable is false', () => {
    render(
      <Button
        label="Click me!"
        onClick={() => alert('Hello!')}
        editable={false}
      />
    );
    const button = screen.queryByText(/edit/i);
    expect(button).not.toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const mockFn = jest.fn();
    render(<Button label="Click me!" onClick={mockFn} />);
    const button = screen.getByText('Click me!');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });
});
