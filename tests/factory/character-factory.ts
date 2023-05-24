import { faker } from '@faker-js/faker';
import { Character } from '@/src/external/swapi/types';

export const makeCharacter = (): Character => {
  return {
    id: faker.string.sample(),
    name: faker.string.sample(),
    height: faker.string.sample(),
    mass: faker.string.sample(),
    hair_color: faker.string.sample(),
    skin_color: faker.string.sample(),
    eye_color: faker.string.sample(),
    birth_year: faker.string.sample(),
    gender: faker.string.sample(),
    url: faker.string.sample(),
  };
};
