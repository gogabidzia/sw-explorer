import { render, screen } from '@testing-library/react';
import CharacterCard from '..';
import { makeCharacter } from '@/tests/factory/character-factory';

describe('CharacterCard', () => {
  const character = makeCharacter();

  beforeEach(() => {
    render(<CharacterCard character={character} />);
  });

  it('renders name with correct value', () => {
    const element = screen.getByTestId('character-name');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(character.name);
  });

  it('renders height in correct format', () => {
    const element = screen.getByTestId('character-height');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(character.height + ' cm');
  });

  it('renders eye color in correct format', () => {
    const element = screen.getByTestId('character-eyecolor');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(character.eye_color);
  });
});

export {};
