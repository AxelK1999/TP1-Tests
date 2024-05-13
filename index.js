const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

async function example() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build()
  try {
    let result = await driver.get('https://www.google.com')
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
    
    let title = await driver.getTitle();
    //console.log('Título de la pestaña:', title);
    return title;
  } finally {
    await driver.quit()
  }
}

//Verifica correcto acceso al CVUGD dado las credenciales:
async function inicioSesiónCVUGD(){
  let driver = await new Builder().forBrowser(Browser.EDGE).build()
  try {

    let result = await driver.get('https://campusvirtual.ugd.edu.ar/moodle/login/index.php');
    await driver.findElement(By.id('username')).sendKeys('...');
    await driver.findElement(By.id('password')).sendKeys('...', Key.RETURN);
    //key.RETURN -> Al ingresar los datos ejecuta el enter(submit).
    //await driver.findElement(By.id('password')).click(); 

   //await driver.executeScript("document.querySelector(\"input[type='submit'][value='Ingresar']\").click();")
    
    let title = await driver.getTitle();
    return title;

  } finally {
    await driver.quit()
  }
}

async function nombreCursoCorrectoAlIngresar(){
  let driver = await new Builder().forBrowser(Browser.EDGE).build()
  try {

    let result = await driver.get('https://campusvirtual.ugd.edu.ar/moodle/login/index.php');
    await driver.findElement(By.id('username')).sendKeys('67112');
    await driver.findElement(By.id('password')).sendKeys('axel1530139', Key.RETURN);
    
    await driver.findElement(By.className('coursebox'));


    let title = await driver.getTitle();
    return title;

  } finally {
    await driver.quit()
  }
}



module.exports = {example, inicioSesiónCVUGD};
//example();
