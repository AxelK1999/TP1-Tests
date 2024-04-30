const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

async function example() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build()
  try {
    let result = await driver.get('https://www.google.com/ncr')
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
    
    let title = await driver.getTitle();
    //console.log('Título de la pestaña:', title);
    return title;
  } finally {
    await driver.quit()
  }
}

module.exports = example;
//example();