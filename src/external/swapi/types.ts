export type CharactersRequestArgs = {
  search: string | null;
  page: number;
};

export type CharacterFromResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
};

export type Character = CharacterFromResponse & { id: string };

export type CharactersResponsePayload = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
};
