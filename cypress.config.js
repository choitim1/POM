const { defineConfig } = require("cypress");


module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalStudio: true, 
    "viewportWidth": 1024,
    "viewportHeight": 768,
    // " chromeWebSecurity": false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
