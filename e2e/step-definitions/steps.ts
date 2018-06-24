// e2e/step-definitions/steps.ts
import { ListadoDeHeroesObject } from "../pages/listado-de-heroes.po";
import { by, element } from "protractor";
import { Given, Then, When } from 'cucumber';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

let homePage = new ListadoDeHeroesObject();

/* First scenario */
Given('I go to heroes list', (callback) => {
  homePage.get().then(() => callback());
});

Then('I should see {int} superheroes in the list', (lenghtpage, callback) => {
  homePage.getLenghtPage().then(number => {
    expect(number).to.equal(lenghtpage);
    callback();
  });
});

Then('I take picture of {string}', function (string,callback) {
  homePage.saveScreenshot(string+'.png');
  callback();
});


/* Second scenario */
/*Then('I should identify the first superheroe name as {string}', (heroe_name, callback) => {
  homePage.getFirstHeroeName().then(name => {
    expect(name).to.equal(heroe_name);
    callback();
  });
});*/

/*Then(/^I should identify this superheroe name as "([^"]*)"$/, (heroe_name, callback) => {
  homePage.getHeroeName(heroe_name).then(name => {
    expect(name).to.equal(heroe_name);
    callback();
  });
});*/

Then('I should identify this superheroe name as {string}', (heroe_name, callback) => {
  homePage.getHeroeName(heroe_name).then(name => {
    expect(name).to.equal(heroe_name);
    callback();
  });
});


/* Thrid scenario */
When('I click on the first superheroe', function (callback) {
  // Write code here that turns the phrase above into concrete actions
  homePage.clickFirstHeroeName();
  callback();
});

Then('I should identify the profile superheroe {string}', function (string, callback) {
  homePage.getHeroeNameInProfile().then(name => {
    expect(name).to.equal(string);
    callback();
  });
});


/* Fourth scenario */
Given('I click {string}', function (string, callback) {
  console.log("string");
  console.log(string);
  homePage.clickButton(string).then(() => {
    callback();
  });
});

When('I write {string} in the {string} input', function (value, input, callback) {
  homePage.setInput(input, value).then(() => callback());
});

Then('I should see {int} items containing {string}', function (lenghtpage,name,callback) {
  homePage.getLenghtByName(name).then(number => {
    console.log("number y name");
    console.log(number);
    console.log(name);
    //console.log(element.all(by.repeater(name)).count());
    expect(number).to.equal(lenghtpage);
    callback();
  });
});

/* Fifth escenario */
Then('I touch {string}', function (string, callback) {
  homePage.touchButton(string).then(() => {
    callback();
  });
});
Then('I enter the input', function (callback) {
  homePage.enterInput().then(() => {
    callback();
  });
});

