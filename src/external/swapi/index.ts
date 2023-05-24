import { Axios } from 'axios';
import {
  CharactersRequestArgs,
  CharactersResponsePayload,
  Character,
  CharacterFromResponse,
} from './types';

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
