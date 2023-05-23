export type RequestArgs = {
  search?: string;
  page?: number;
};

export default class SWApiClient {
  constructor(private apiKey: string) {}

  async request(args: RequestArgs) {
    console.log(args, this.apiKey);
    // TODO: implement
  }
}
