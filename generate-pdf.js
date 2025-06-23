const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 🟩 Your local URL
  await page.goto('http://localhost:8000', {
    waitUntil: 'networkidle0'  // wait until no more requests for 500ms
  });

  // 🟩 Optional: wait for an element you know appears only after render
  await page.waitForSelector('.pdf'); // change class name if needed

  await page.pdf({
    path: 'INVOICE.pdf',
    format: 'A4',
    printBackground: true
  });
 
  console.log('✅ PDF Generated: INVOICE.pdf');
  await browser.close();
})();
