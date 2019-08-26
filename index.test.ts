import puppeteer from 'puppeteer';

let browser: puppeteer.Browser;
let page: puppeteer.Page;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 250
    });
    page = await browser.newPage();
});

afterAll(() => {
    browser.close()
});

describe("hackernews", () => {
    test("user can navigate to page 2", async () => {

        await page.goto('https://news.ycombinator.com/');
        await page.click(".morelink");

        expect(page.url()).toBe('https://news.ycombinator.com/news?p=2')
    }, 16000);
});
