// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
        '--headless', '--auto-open-devtools-for-tabs'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  
  cucumberOpts: {
    require: ['./e2e/**/*.ts'],
    tags: [],
    strict: true,
    format: ["progress"],
    dryRun: false,
    compiler: [ 'ts:ts-node'],
    keepAlive: false
  },
  onPrepare: function() {
    //browser.manage().window().setSize(1680, 1050);
    //.maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  }
};

//V1: no sirvio
/*
capabilities: {
  'browserName': 'chrome'
},
'mobileEmulation':{
        'deviceName':'Nexus 5'
      },
*/

//V2: Tampoco
/*capabilities: {
  'browserName': 'chrome',
  'chromeOptions': {
      useAutomationExtension: false,
      args: [ "--headless","--disable-gpu","--window-size=800x600"],
      'mobileEmulation':{
        'deviceName':'Nexus 5'
      }
  } 
},
*/

//V3: Si funciona, sólo basta quitarle el --headless para ver el browser
/*
capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
        '--headless', '--auto-open-devtools-for-tabs'
      ]
    }
  },
*/