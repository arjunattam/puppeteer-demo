import puppeteer from 'puppeteer';

async function screenshot(url: string) {
    const browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 250
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();

    // await page.emulate(puppeteer.devices['iPhone 8 landscape'])
    await page.goto(url, {
        waitUntil: 'networkidle0'
    });
    await page.screenshot({ path: 'example.png' });

    await browser.close();
}

if (require.main === module) {
    // screenshot('http://google.com')

    // screenshot('https://hn.cdurth.com');

    screenshot('https://twitter.com/LostInTangent/status/1141000093111205888')
}
