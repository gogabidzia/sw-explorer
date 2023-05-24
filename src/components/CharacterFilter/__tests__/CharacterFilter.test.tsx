import { render, screen, fireEvent } from '@testing-library/react';
import CharacterFilter from '..';

describe('CharacterFilter', () => {
  const searchTermChangeMock = jest.fn();

  beforeEach(() => {
    render(<CharacterFilter onSearchTermChange={searchTermChangeMock} />);
  });

  it('renders input', () => {
    const element = screen.getByTestId('character-filter-input');
    expect(element).toBeInTheDocument();
  });

  it('calls change handler while typing', () => {
    const value = 'Test';

    fireEvent.change(screen.getByTestId('character-filter-input'), {
      target: {
        value,
      },
    });

    expect(searchTermChangeMock).toHaveBeenCalledWith(value);
  });
});

export {};
