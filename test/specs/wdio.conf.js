const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        'test/specs/Automation_MOBILE.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{

    'appium:platformName' : 'Android',
    'appium:platformVersion': '12.0',
    'appium:deviceName': 'Pixel 4 API 32',
    'appium:automationName': 'UIAutomator2',
    'appium:app':path.join(process.cwd(),'app/booking-com-32-9.apk')
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec', ['json', { outputDir: './json-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
