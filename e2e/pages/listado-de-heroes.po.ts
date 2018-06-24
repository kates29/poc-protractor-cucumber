//e2e/pages/home.po.ts
import { browser, by, element, promise, protractor } from "protractor";
var fs = require('file-system');

export class ListadoDeHeroesObject {

  get(): promise.Promise<void> {
    return browser.get('/');
  }

  getLenghtPage(): promise.Promise<number> {
    return element.all(by.css('.hero-entry')).count();
  }

  getLenghtByName(name): promise.Promise<number> {
    console.log("name");
    console.log(name);
    return element.all(by.cssContainingText('.hero-entry', name)).count();
  }

  getFirstHeroeName(): promise.Promise<string> {
    return element(by.css("body > app-root > div > app-listado-de-heroes > div > div:nth-child(2) > a > span")).getText();
  }

  getHeroeName(name): promise.Promise<string> {
    //return element(by.css("body > app-root > div > app-listado-de-heroes > div > div:nth-child(2) > a > span")).getText();
    return element(by.cssContainingText('.hero-entry', name)).getText();
  }

  clickFirstHeroeName(): promise.Promise<void> {
    return element(by.css("body > app-root > div > app-listado-de-heroes > div > div:nth-child(2) > a > span")).click();
  }

  getHeroeNameInProfile(): promise.Promise<string> {
    return element(by.css("body > app-root > div > app-hero-profile > h1")).getText();
  }

  saveScreenshot(nameFile:string): promise.Promise<void> {
      return browser.takeScreenshot().then(function(png) {
      var decodedImage = new Buffer(png, "base64");
      fs.writeFileSync("tmp/"+nameFile, decodedImage);
      //fs.writeFileSync("/tmp/test.png", decodedImage);
      //return this.escenario.attach(decodedImage, "image/png");

      /*var attach = this.escenario.attach; 
      return browser.takeScreenshot().then(function(png) {
      var decodedImage = new Buffer(png, "base64");
        return attach(decodedImage, "image/png");
      });*/  
    });
  }

  setInput(searchString: string, value: string): promise.Promise<void> {
    return element(by.css('#search')).sendKeys(value, protractor.Key.ENTER);
    //return element(by.model('searchString')).clear().sendKeys(value, protractor.Key.ENTER);
  }
  
  clickButton(buttonName: string): promise.Promise<void> {
    console.log("buttonName");
    console.log(buttonName);
    return element(by.css('.'+buttonName)).click();
  }

  //V1: This version uses execute script -- Funcionaaaaaaa =D
  touchButton(buttonName: string): promise.Promise<{}>{
    console.log("buttonName");
    console.log(buttonName);
    var poster = element(by.css('.'+buttonName));
    /*poster.getLocation().then(function (location) {
      console.log(location);
    });*/
    return browser.executeScript(
        "var e = new Event('touchstart'); arguments[0].dispatchEvent(e);",poster);
  }

  enterInput(): promise.Promise<void>{
    return element(by.css('.form-control')).sendKeys(protractor.Key.ENTER);
  }
  //V2: This version uses browser
  /*touchButton(buttonName: string): promise.Promise<void>{
    console.log("buttonName");
    console.log(buttonName);
    var poster = element(by.css('.'+buttonName));
    poster.getLocation().then(function (location) {
      console.log(location);
    });
    return browser.driver.actions().click(poster).perform();
  }*/
  //V3: touch solo
  /*touchButton(buttonName: string): promise.Promise<void>{
    return element(by.css('.'+buttonName)).click();
  }*/


}