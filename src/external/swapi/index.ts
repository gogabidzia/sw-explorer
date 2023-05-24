import { Axios } from 'axios';

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

export default class SWApiClient {
  private client: Axios;
  private baseURL = 'https://swapi.dev/api/people';

  constructor() {
    this.client = new Axios({
      baseURL: this.baseURL,
    });
  }

  async characters(args: CharactersRequestArgs): Promise<CharactersResponsePayload> {
    const response = await this.client.get('/', {
      params: args,
    });

    const payload = JSON.parse(response.data);

    return {
      ...payload,
      results: payload.results.map((character: Character) => this.transformCharacter(character)),
    };
  }

  async character(id: string): Promise<Character> {
    const response = await this.client.get(`/${id}`);

    return this.transformCharacter(JSON.parse(response.data));
  }

  private transformCharacter(character: CharacterFromResponse): Character {
    return {
      ...character,
      id: character.url.replace('https://swapi.dev/api/people/', '').replace('/', ''), // response doesn't include separate id field
    };
  }
}
