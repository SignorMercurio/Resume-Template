const puppeteer = require('puppeteer')
const base_path = require('os').homedir() + '/Downloads'
const en = `${base_path}/en.pdf`
const zh = `${base_path}/zh.pdf`
const url = 'http://localhost:8080'
const pdfConfig = {
  format: 'a4',
  scale: 0.65,
  pageRanges: '1',
  printBackground: true,
}

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2',
  })
  await page.pdf({
    path: en,
    ...pdfConfig,
  })
  await page.click('button.lang')
  await page.click('body')

  await page.pdf({
    path: zh,
    ...pdfConfig,
  })

  await browser.close()
})()
