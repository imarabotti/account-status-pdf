const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('http://app.octopus.local/expense-horizontal');
    
    await page.pdf({
        path: 'example.pdf',
        size: 'a4',
        landscape: true,
        printBackground: true,
        margin: {
            top: 30,
            left: 60,
            right: 30,
            bottom: 30,
        }
    });

    await browser.close();
})();