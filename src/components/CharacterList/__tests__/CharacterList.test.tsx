import { render, screen, fireEvent } from '@testing-library/react';
import CharacterList from '..';
import { makeCharacter } from '@/tests/factory/character-factory';
import { CharacterMap } from '@/src/store/characters/slice';

describe('CharacterList', () => {
  const characters = new Array(10)
    .fill(true)
    .map(makeCharacter)
    .reduce((acc: CharacterMap, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

  beforeEach(() => {
    render(<CharacterList characters={characters} />);
  });

  it('renders correct amount of character cards', () => {
    const elements = screen.queryAllByTestId('character-card');
    expect(elements.length).toEqual(Object.keys(characters).length);
  });
});

export {};
