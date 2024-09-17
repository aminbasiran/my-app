import { render, screen } from '@testing-library/react';
import Lists from '../Lists'; // Import the Lists component

describe('Lists', () => {
  test('should render a list component', () => {
    const person = [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ];

    // Render the Lists component with the person data
    render(<Lists person={person} />);

    // Check if the list itself is in the document
    const lists = screen.getByRole('list');
    expect(lists).toBeInTheDocument();

    // Check if the correct number of list items is rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(person.length); // Should match the length of the person array
  });

  test('it should not render a list when list length is 0', () => {
    const person = [];
    render(<Lists person={person} />);

    const data = screen.getByText(/no data/i);
    expect(data).toBeInTheDocument();
  });

  test("should render 'No data' when person is not provided", () => {
    render(<Lists />);

    const noDataMessage = screen.getByText('No data');
    expect(noDataMessage).toBeInTheDocument();
  });

  test('should update list item when prop changes', () => {
    const initialPerson = [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ];

    const updatedPerson = [
      {
        id: 3,
        name: 'Alice Smith',
      },
    ];

    const { rerender } = render(<Lists person={initialPerson} />);
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();

    rerender(<Lists person={updatedPerson} />);
    expect(screen.getByText(/alice smith/i)).toBeInTheDocument();
  });
});
