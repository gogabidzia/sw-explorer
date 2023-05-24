import puppeteer, { Browser, Page } from 'puppeteer';

describe('character preview', () => {
  let browser: Browser, page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
    });

    page = await browser.newPage();
  });

  beforeEach(async () => {
    await page.goto((process.env.APP_URL as string) + '/characters/1');
  });

  afterAll(() => browser.close());

  it('renders header, character details, necessary buttons', async () => {
    await page.waitForSelector('title');

    const header = await page.$('[data-testid="header-text"]');
    expect(header).toBeTruthy();

    await page.waitForNetworkIdle();

    const characterName = await page.$('[data-testid="character-name-text"]');
    expect(characterName).toBeTruthy();

    const characterHeight = await page.$('[data-testid="character-height-text"]');
    expect(characterHeight).toBeTruthy();

    const characaterMass = await page.$('[data-testid="character-mass-text"]');
    expect(characaterMass).toBeTruthy();

    const editBtn = await page.$('[data-testid="character-edit-button"]');
    expect(editBtn).toBeTruthy();

    const backBtn = await page.$('[data-testid="character-back-button"]');
    expect(backBtn).toBeTruthy();
  });

  it('toggles edit mode after clicking edit button', async () => {
    await page.waitForSelector('[data-testid="character-edit-button"]');

    await page.click('[data-testid="character-edit-button"]');

    const nameInput = await page.$('[data-testid="character-name-input"]');
    expect(nameInput).toBeTruthy();
  });

  it('updates character on both page and list after clicking save', async () => {
    await page.waitForSelector('[data-testid="character-edit-button"]');

    await page.click('[data-testid="character-edit-button"]');

    await page.type('[data-testid="character-name-input"]', '123');

    await page.click(`[data-testid="character-save-button"]`);

    const characterName = await page.$eval(
      '[data-testid="character-name-text"]',
      (e) => e.textContent
    );
    expect(characterName).toEqual('Luke Skywalker123');

    await page.click('[data-testid="character-back-button"]');
    await page.waitForNetworkIdle();
    expect(await page.$('[data-testid="character-name"]')).toBeTruthy();

    const newCharacterNameInList = await page.$eval(
      '[data-testid="character-name"]',
      (e) => e.textContent
    );
    expect(newCharacterNameInList).toEqual('Luke Skywalker123');
  });
});

export {};
