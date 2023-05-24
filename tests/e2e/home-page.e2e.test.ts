import puppeteer, { Browser, Page } from 'puppeteer';

describe('home page', () => {
  let browser: Browser, page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
    });

    page = await browser.newPage();
  });

  beforeEach(async () => {
    await page.goto(process.env.APP_URL as string);
  });

  afterAll(() => browser.close());

  it('renders header, search, characters, pagination', async () => {
    await page.waitForSelector('title');

    const header = await page.$('[data-testid="header-text"]');
    expect(header).toBeTruthy();

    const search = await page.$('[data-testid="character-filter-input"]');
    expect(search).toBeTruthy();

    await page.waitForSelector('[data-testid="character-card"]');

    const characterName = await page.$('[data-testid="character-name"]');
    expect(characterName).toBeTruthy();

    const characterHeight = await page.$('[data-testid="character-height"]');
    expect(characterHeight).toBeTruthy();

    const characterEyeColor = await page.$('[data-testid="character-eyecolor"]');
    expect(characterEyeColor).toBeTruthy();

    const pagination = await page.$('[data-testid="pagination"]');
    expect(pagination).toBeTruthy();
  });

  it('reloads results after typing in search box', async () => {
    await page.type('[data-testid="character-filter-input"]', 'luke skywalker');

    await page.waitForNetworkIdle();

    const characterName = await page.$eval('[data-testid="character-name"]', (e) => e.textContent);
    expect(characterName).toEqual('Luke Skywalker');

    await page.type('[data-testid="character-filter-input"]', '');

    await page.waitForNetworkIdle();
  });

  it('reloads results after page change', async () => {
    await page.click('[data-testid="pagination-next"]');
    await page.waitForNetworkIdle();

    expect(await page.$('[data-testid="character-name"]')).toBeTruthy();

    await page.click('[data-testid="pagination-prev"]');
    await page.waitForNetworkIdle();

    expect(await page.$('[data-testid="character-name"]')).toBeTruthy();
  });
});

export {};
