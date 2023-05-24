import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CharacterPreview from '..';
import { makeCharacter } from '@/tests/factory/character-factory';

describe('CharacterPreview', () => {
  const character = makeCharacter();

  const onCharacterUpdateMock = jest.fn();

  beforeEach(() => {
    render(<CharacterPreview character={character} onCharacterUpdate={onCharacterUpdateMock} />);
  });

  it('renders name with correct value', () => {
    const element = screen.getByTestId('character-name-text');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(character.name);
  });

  it('renders height in correct format', () => {
    const element = screen.getByTestId('character-height-text');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(character.height + ' cm');
  });

  it('renders mass in correct format', () => {
    const element = screen.getByTestId('character-mass-text');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(character.mass + ' kg');
  });

  it('shows inputs after clicking edit input', () => {
    fireEvent.click(screen.getByTestId('character-edit-button'));
    const inputs = ['character-name-input', 'character-height-input', 'character-mass-input'];

    for (const inputId of inputs) {
      expect(screen.getByTestId(inputId)).toBeInTheDocument();
    }
  });

  it('shows texts and fires onUpdate callback after clicking save', () => {
    const name = 'Test Name';
    fireEvent.click(screen.getByTestId('character-edit-button'));

    fireEvent.change(screen.getByTestId('character-name-input'), {
      target: {
        value: name,
      },
    });

    fireEvent.click(screen.getByTestId('character-save-button'));

    waitFor(() => {
      expect(onCharacterUpdateMock).toHaveBeenCalledTimes(1);
    });
  });
});

export {};
